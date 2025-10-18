import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface ReportHeaderProps {
  userName?: string;
  date: string;
}

export function ReportHeader({ userName = "there", date }: ReportHeaderProps) {
  return (
    <div className="border-b bg-card">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" data-testid="button-back-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Button variant="outline" size="sm" data-testid="button-download-report">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Your Financial Awareness Report
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          Welcome {userName},
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Here's what we discovered together through our conversation. 
          This report reveals your unique relationship with money and provides insights to guide your transformation.
        </p>
        <p className="text-sm text-muted-foreground mt-4">Generated on {date}</p>
      </div>
    </div>
  );
}
