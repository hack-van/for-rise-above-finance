import { getAPI } from "@/lib/api";
import { useConversation } from "./chat";
import { useQuery } from "@tanstack/react-query";

export type MetricReport = {
  msai: number; // Money Self-Awareness Index (0-100)
  moneyScripts: { subject: string; value: number }[];
  behavioral: { name: string; value: number }[];
  emotions: { [key: string]: number };
  attachment: { anxiety: number; avoidance: number };
};

export async function generateMetricReport(): Promise<MetricReport> {
  const api = await getAPI();
  //const response = await api.post<ArrayBuffer>("/engine/metric-report", {
  //  messages: useConversation.getState().messages,
  //});

  return {
    msai: 72, // Money Self-Awareness Index (0-100)
    moneyScripts: [
      { subject: "Avoidance", value: 8 },
      { subject: "Worship", value: 3 },
      { subject: "Status", value: 5 },
      { subject: "Vigilance", value: 7 },
    ],
    behavioral: [
      { name: "Planning", value: 7 },
      { name: "Risk Tolerance", value: 4 },
      { name: "Future Orientation", value: 8 },
      { name: "Scarcity vs Abundance", value: 5 },
      { name: "Control vs Flow", value: 6 },
    ],
    emotions: { Anxiety: 7, Guilt: 6, Empowerment: 5 },
    attachment: { anxiety: 6, avoidance: 6 },
  };
}

export function useMetricReport() {
  return useQuery({
    queryKey: ["metricReport"],
    queryFn: generateMetricReport,
  });
}
