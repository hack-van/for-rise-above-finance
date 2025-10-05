import { getAPI } from "@/lib/api";
import { useConversation } from "./chat";

export async function generateReport() {
  const conversation = useConversation.getState().messages;
  const api = await getAPI();
  const response = await api.post<ArrayBuffer>("/engine/report", {
    messages: useConversation.getState().messages,
  });
  // response is a pdf file
  // create a blob from the response and open it in a new tab

  const pdfBlob = new Blob([response.data], { type: "application/pdf" });
  const pdfUrl = URL.createObjectURL(pdfBlob);

  window.open(pdfUrl, "_blank");
  return {
    url: pdfUrl,
  };
}
