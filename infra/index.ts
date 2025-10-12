import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as fs from "fs";
import * as path from "path";
import { local } from "@pulumi/command";
import mime from "mime";

const config = new pulumi.Config();

const project = pulumi.getProject();
const env = pulumi.getStack();

const identifier = `${project}-${env}`;

const region = aws.getRegionOutput().name;

// Create an S3 bucket without ACL
const siteBucket = new aws.s3.Bucket(`${identifier}-website-bucket`, {
  website: {
    indexDocument: "index.html",
    errorDocument: "index.html", // Single Page Application support
  },
});

// Configure bucket ownership controls
const bucketOwnershipControls = new aws.s3.BucketOwnershipControls(
  `${identifier}-ownership-controls`,
  {
    bucket: siteBucket.id,
    rule: {
      objectOwnership: "BucketOwnerPreferred",
    },
  }
);

// Configure public access block settings
const bucketPublicAccessBlock = new aws.s3.BucketPublicAccessBlock(
  `${identifier}-public-access-block`,
  {
    bucket: siteBucket.id,
    blockPublicAcls: false,
    blockPublicPolicy: false,
    ignorePublicAcls: false,
    restrictPublicBuckets: false,
  }
);

const bucketPolicy = new aws.s3.BucketPolicy(
  `${identifier}-bucket-policy`,
  {
    bucket: siteBucket.id,
    policy: siteBucket.arn.apply((bucketArn) =>
      JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: "*",
            Action: "s3:GetObject",
            Resource: `${bucketArn}/*`,
          },
        ],
      })
    ),
  },
  { dependsOn: [bucketPublicAccessBlock, bucketOwnershipControls] }
);

const addFolderContents = (
  bucket: aws.s3.Bucket,
  siteDir: string,
  prefix?: string
) => {
  for (let item of fs.readdirSync(siteDir)) {
    let filePath = path.join(siteDir, item);
    let isDir = fs.lstatSync(filePath).isDirectory();

    if (isDir) {
      const newPrefix = prefix ? path.join(prefix, item) : item;
      addFolderContents(bucket, filePath, newPrefix);
      continue;
    }

    let itemPath = prefix ? path.join(prefix, item) : item;
    itemPath = itemPath.replace(/\\/g, "/"); // convert Windows paths to something S3 will recognize

    let object = new aws.s3.BucketObject(itemPath, {
      bucket: bucket,
      source: new pulumi.asset.FileAsset(filePath), // use FileAsset to point to a file
      contentType: mime.getType(filePath) || undefined, // set the MIME type of the file
    });
  }
};

//Run `npm run build` in the client directory

const random = new local.Command("build", {
  dir: "../",
  create: "npm run build",
  update: "npm run build",
  environment: {
    VITE_API_BASE_URL: config.require("apiBaseUrl"),
  },
});

// only after the build is done
random.stdout.apply((x) => {
  addFolderContents(siteBucket, "../dist/public");
});

export const bucketName = siteBucket.bucket;
export const websiteUrl = siteBucket.websiteEndpoint;
