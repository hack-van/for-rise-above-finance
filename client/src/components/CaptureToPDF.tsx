import React from "react";
import { Button } from "./ui/button";
import { jsPDF } from "jspdf";
import { Download } from "lucide-react";
import html2canvas from "html2canvas-pro";

const CaptureToPDF: React.FC<{
  id: string;
  filename: string;
}> = ({ id, filename }) => {
  return (
    <Button
      onClick={async () => {
        const element = document.getElementById(id);
        if (!element) {
          alert("Error extracting content to PDF");
          return;
        }
        html2canvas(element, { backgroundColor: "white" }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [canvas.width, canvas.height],
          });
          pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
          pdf.save(filename);
        });
      }}
    >
      <Download />
    </Button>
  );
};

export default CaptureToPDF;
