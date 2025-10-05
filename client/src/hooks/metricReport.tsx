import { getAPI } from "@/lib/api";
import { useConversation } from "./chat";
import { useQuery } from "@tanstack/react-query";

/**
 * As the structure is AI generated, we make all fields optional to avoid runtime errors
 */
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type MetricReport = RecursivePartial<{
  overallAlignment: number; // Overall alignment score (0-100)
  msai: number; // Money Self-Awareness Index (0-100)
  moneyScripts: { subject: string; value: number }[];
  behavioral: { name: string; value: number }[];
  emotions: { [key: string]: number };
  attachment: { anxiety: number; avoidance: number };
  topStrengths: string[];
  primaryGrowthEdges: string[];
  financialConfidence: number; // Financial confidence score (0-100)
  emotionalCalmness: number; // Emotional calmness score (0-100)
  goalClarity: number; // Goal clarity score (0-100)
  interpretation: {
    actionStep: string;
    keyConflict: string;
    summary: string;
  };
}>;

export async function generateMetricReport(): Promise<MetricReport> {
  const api = await getAPI();
  const response = await api.post<MetricReport>("/engine/metrics", {
    messages: useConversation.getState().messages,
  });
  return response.data;
}

export function useMetricReport() {
  return useQuery({
    queryKey: ["metricReport"],
    queryFn: generateMetricReport,
  });
}
