#!/bin/bash

# show environment info
echo "Node version: $(node -v)"
echo "Environment variables:"
cat .env
#printenv | grep VITE_



# user should press enter
read -p "Press [Enter] to start the build process..."

# build the project to a tar.gz file
npm i
npm run build
tar -czf build.tar.gz dist
echo "Build completed: build.tar.gz"