import { getAPI } from "@/lib/api";
import { useConversation } from "./chat";

export async function generateReport() {
  const conversation = useConversation.getState().messages;
  const api = await getAPI();
  const response = await api.post<ArrayBuffer>("/report", {
    messages: useConversation.getState().messages,
  });
  // response is a pdf file
  // create a blob from the response and open it in a new tab
  const pdfBlob = new Blob([response.data], { type: "application/pdf" });
  const pdfUrl =
    "https://claude.ai/public/artifacts/f503f98f-77bd-4bd2-ab82-ee445e9b9ec0"; //URL.createObjectURL(pdfBlob);

  window.open(pdfUrl, "_blank");
  return {
    url: pdfUrl,
  };
}
