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
}>;

export async function generateMetricReport(): Promise<MetricReport> {
  const api = await getAPI();
  //const response = await api.post<MetricReport>("/engine/metric-report", {
  //  messages: useConversation.getState().messages,
  //});

  return {
    overallAlignment: 68, // Overall alignment score (0-100)
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
    topStrengths: [
      "Future-focused planning",
      "Reliable and detail-oriented",
      "Strong vigilance helps catch risks",
    ],
    primaryGrowthEdges: [
      "Tendency to avoid looking at accounts when stressed",
      "Guilt around spending reduces enjoyment",
      "Overcontrol can exhaust motivation",
    ],
    financialConfidence: 75, // Financial confidence score (0-100)
    emotionalCalmness: 60, // Emotional calmness score (0-100)
    goalClarity: 85, // Goal clarity score (0-100)
  };
}

export function useMetricReport() {
  return useQuery({
    queryKey: ["metricReport"],
    queryFn: generateMetricReport,
  });
}
