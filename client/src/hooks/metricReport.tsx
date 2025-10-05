import { getAPI } from "@/lib/api";
import { useConversation } from "./chat";
import { useQuery } from "@tanstack/react-query";

export type MetricReport = {
  scores: {
    overall: number;
    klontz_money_scripts: {
      money_avoidance: number;
      money_worship: number;
      status: number;
      vigilance: number;
    };
    behavioral_dimensions: {
      planning: number;
      risk_tolerance: number;
      future_orientation: number;
      scarcity_abundance: number;
      control_flow: number;
    };
    emotional_attachment: {
      emotions: {
        [key: string]: number; // score for each emotion
      };
      anxiety: number;
      attachment_style: {
        [key: string]: number; // score for each attachment style
      };
      conflicts_detected: string[]; // list of conflicts detected
    };
  };
  priorities: {
    [key: string]: number; // score out of 10 for each priority
  };
  goals: {
    achieved?: string[];
    short_term: string[];
    medium_term: string[];
    long_term: string[];
  };
};

export async function generateMetricReport(): Promise<MetricReport> {
  const api = await getAPI();
  //const response = await api.post<ArrayBuffer>("/engine/metric-report", {
  //  messages: useConversation.getState().messages,
  //});

  return {
    scores: {
      overall: 8,
      klontz_money_scripts: {
        money_avoidance: 6,
        money_worship: 7,
        status: 5,
        vigilance: 8,
      },
      behavioral_dimensions: {
        planning: 9,
        risk_tolerance: 6,
        future_orientation: 7,
        scarcity_abundance: 5,
        control_flow: 8,
      },
      emotional_attachment: {
        emotions: {
          joy: 7,
          sadness: 4,
          anger: 5,
          fear: 6,
          surprise: 8,
        },
        anxiety: 5,
        attachment_style: {
          secure: 7,
          anxious: 4,
          avoidant: 5,
          disorganized: 3,
        },
        conflicts_detected: ["Conflict between risk tolerance and planning"],
      },
    },
    priorities: {
      "Building a family": 9,
      "Start a business": 2,
      "Travel the world": 7,
      "Achieve financial independence": 10,
    },
    goals: {
      achieved: ["Building a house"],
      short_term: [
        "Setup tithing 10 percent",
        "Delegate tithing research and automation",
      ],
      medium_term: [
        "Build business revenue to replace parental support",
        "Establish structured delegation for financial stewardship",
      ],
      long_term: ["Financial independence", "Live off investment returns"],
    },
  };
}

export function useMetricReport() {
  return useQuery({
    queryKey: ["metricReport"],
    queryFn: generateMetricReport,
  });
}
