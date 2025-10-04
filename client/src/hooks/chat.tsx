import { getAPI } from "@/lib/api";
import { create } from "zustand";

export type Role = "user" | "assistant";
export type Message = {
  prompt: string;
  role: Role;
};

export const useConversation = create<{
  messages: Array<Message>;
}>((set) => ({
  messages: [
    {
      prompt:
        "Welcome! I'm here to help you understand your relationship with money. This is a safe, judgment-free space for honest reflection.\n\nLet's begin with your money story...",
      role: "assistant",
    },
  ],
}));

export async function sendMessage(message: string) {
  useConversation.setState((state) => ({
    messages: [...state.messages, { prompt: message, role: "user" }],
  }));
  const api = await getAPI();
  /*const response = await api.post<{
    message: string;
  }>("/chat", {
    messages: useConversation.getState().messages,
  });
  const assistantMessage = response.data?.message;
  */
  const assistantMessage = "This is a placeholder response from the assistant.";
  if (assistantMessage) {
    useConversation.setState((state) => ({
      messages: [
        ...state.messages,
        { prompt: assistantMessage, role: "assistant" },
      ],
    }));
  }
  return assistantMessage;
}
