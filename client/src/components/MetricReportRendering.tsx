import { useMetricReport } from "@/hooks/metricReport";
import { LoaderCircle } from "lucide-react";
import React from "react";
import WordCloud from "./WordCloud";

const MetricReportRendering = () => {
  const { data } = useMetricReport();
  // return loader
  if (!data)
    return (
      <div className="flex items-center gap-2 text-lg font-medium">
        <LoaderCircle className="animate-spin" /> Loading your report...
      </div>
    );
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-bold">Your report</h2>
        <span
          style={{
            backgroundColor:
              data.scores.overall >= 7
                ? "green"
                : data.scores.overall >= 4
                ? "orange"
                : "red",
            color: "white",
            borderRadius: "100%",
            fontWeight: "bold",
            fontSize: "1.25rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            padding: 0,
            textAlign: "center",
          }}
        >
          {data.scores.overall}/10
        </span>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h3 className="mb-2 text-xl font-semibold">Klontz money scripts</h3>
        <div className="grid grid-cols-4 gap-1">
          {Object.entries(data.scores.klontz_money_scripts)
            .sort(([, aValue], [, bValue]) =>
              bValue !== aValue ? bValue - aValue : 0
            )
            .map(([key, value]) => (
              <div key={key} className="flex flex-row items-center gap-2">
                <div
                  key={key}
                  style={{
                    backgroundColor:
                      value >= 7 ? "green" : value >= 4 ? "orange" : "red",
                    color: "white",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.25rem 0.5rem",
                    textAlign: "center",
                  }}
                >
                  {value}
                </div>
                <span className="text-sm">
                  {
                    {
                      money_avoidance: "Money Avoidance",
                      money_worship: "Money Worship",
                      status: "Status",
                      vigilance: "Vigilance",
                    }[key]
                  }
                </span>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-xl font-semibold">Behavioural dimensions</h3>
        <div className="flex flex-row items-space-between">
          {Object.entries(data.scores.behavioral_dimensions)
            .sort(([, aValue], [, bValue]) =>
              bValue !== aValue ? bValue - aValue : 0
            )
            .map(([key, value]) => (
              <div key={key} className="flex flex-row items-center gap-2 mr-8">
                <div
                  key={key}
                  style={{
                    backgroundColor:
                      value >= 7 ? "green" : value >= 4 ? "orange" : "red",
                    color: "white",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.25rem 0.5rem",
                    textAlign: "center",
                  }}
                >
                  {value}
                </div>
                <span className="text-sm">
                  {
                    {
                      planning: "Planning",
                      risk_tolerance: "Risk Tolerance",
                      future_orientation: "Future Orientation",
                      scarcity_abundance: "Scarcity vs Abundance",
                      control_flow: "Control vs Flow",
                    }[key]
                  }
                </span>
              </div>
            ))}
        </div>
      </div>

      <div>
        <WordCloud
          words={[
            ...Object.entries(data.priorities).map(([text, value]) => ({
              text,
              value,
            })),
          ]}
          options={{
            fontFamily: "Arial",
            fontSizes: [8, 14],
            padding: 1,
          }}
          style={{ width: "100%", height: 300 }}
        />
      </div>
    </div>
  );
};

export default MetricReportRendering;
