import { getAPI } from "@/lib/api";
import { queryClient } from "@/lib/queryClient";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Role = "user" | "assistant";
export type Message = {
  prompt: string;
  role: Role;
  action?: string;
};

export const useConversation = create<{
  messages: Array<Message>;
  addMessage: (message: Message) => void;
  reset: () => void;
}>()(
  persist(
    (set) => ({
      messages: [
        {
          prompt:
            "Welcome! I'm here to help you understand your relationship with money. This is a safe, judgment-free space for honest reflection.\n\nLet's begin with your money story...",
          role: "assistant",
        },
      ],
      addMessage: (message: Message) =>
        set((state) => ({ messages: [...state.messages, message] })),
      reset: () => {
        //queryClient.invalidateQueries(["metricReport"]);

        set(() => ({
          messages: [
            {
              prompt:
                "Welcome! I'm here to help you understand your relationship with money. This is a safe, judgment-free space for honest reflection.\n\nLet's begin with your money story...",
              role: "assistant",
            },
          ],
        }));
        queryClient.resetQueries({
          queryKey: ["metricReport"],
        });
        queryClient.resetQueries({
          queryKey: ["report"],
        });
      },
    }),
    {
      name: "conversation-storage",
      partialize: (state) => ({ messages: state.messages }),
    }
  )
);

const fakeQuestions = [
  `What does financial success mean to you personally? (not what you think it "should" mean)`,
  `When you think about your future, what matters most? (family security, freedom, experiences, impact, etc.)`,
  `What feeling are you chasing when you think about having your finances "figured out"?`,
  `When you think about money, what emotion comes up most often? (anxiety, excitement, shame, confusion, control, etc.)`,
  `When do you feel most stressed about money? (specific situations/triggers)`,
  `Is there a money decision you're avoiding right now? What makes it hard to face?`,
  `What messages about money did you grow up with? (spoken or unspoken)`,
  `How would you describe your family's relationship with money when you were growing up?`,
  `What's a money memory from your past that still affects how you handle finances today?`,
  `On a scale of 1-10, how well do you feel you understand your current financial situation? What makes you give that number?`,
  `Walk me through your typical spending week. What do you spend on without thinking?`,
  `When you get extra money (bonus, gift, tax refund), what do you typically do with it?`,
  `What financial habit are you most proud of? What habit do you wish you could change?`,
  `What aspect of personal finance confuses or intimidates you most?`,
  `What's stopped you from making financial changes you know you "should" make?`,
  `Have you tried to improve your finances before? What worked? What didn't?`,
  `How aligned are you and your partner on money decisions and priorities? Where do you clash?`,
  `How would you describe your relationship with saving? (consistent, sporadic, non-existent, stressful, etc.)`,
  `How would you describe your relationship with debt? (overwhelming, manageable, strategic, shameful, etc.)`,
  `If money stress disappeared tomorrow, what would your life look like? Be specific.`,
  `What would you be able to do or feel if your finances were exactly where you wanted them?`,
  `In 3-5 years, what do you want to be true about your financial life?`,
  `If nothing changes, where will you be financially in 1 year? 5 years? How does that feel?`,
  `What's at stake if you don't address your financial situation? (What could you lose or miss out on?)`,
  `What becomes possible if you do take action? (What could you gain or experience?)`,
  `What scares you most about making financial changes?`,
  `On a scale of 1-10, how ready do you feel to make meaningful changes to your financial situation right now? What would move that number higher?`,
  `When you've successfully made changes in other areas of your life, what helped you stick with it? (accountability partner, professional help, structure, etc.)`,
  `Knowing what you now know about yourself and your money patterns, how interested would you be in working with a financial advisor who could create a personalized plan specifically for your situation and provide ongoing support?`,
];

export async function sendMessage(message: string) {
  const assistantMessages =
    useConversation.getState().messages.filter((m) => m.role === "assistant")
      .length - 1;

  useConversation.setState((state) => ({
    messages: [...state.messages, { prompt: message, role: "user" }],
  }));
  const api = await getAPI();
  const response = await api.post<{
    reply: string;
    action: string;
  }>("/engine/next", {
    mode: "neutral",
    messages: useConversation.getState().messages,
  });
  const assistantMessage = response.data?.reply;

  // wait for 1.5 seconds to simulate typing
  //await new Promise((resolve) => setTimeout(resolve, 1500));
  //const assistantMessage = "This is a placeholder response from the assistant.";
  //const assistantMessage = fakeQuestions[assistantMessages];
  return { message: assistantMessage, action: response.data?.action };
}
