// FinancialSelfAwarenessMap.jsx
// React + Tailwind single-file mockup for the redesigned "Financial Self-Awareness Map"
// - Default export: <FinancialSelfAwarenessMap />
// - Tailwind classes are used for styling (no CSS imports required)
// - Libraries used (assumed available in your environment):
//   recharts, framer-motion, lucide-react
// - This file is a visual, interactive mockup with dummy data. Integrate by
//   passing real user data into the `mockData` object below or by adapting the
//   prop interface described in the component comment.

import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useMetricReport } from "@/hooks/metricReport";
import Grid2D from "./Grid2D";

// ----------------------
// Dummy data (replace with real answers)
// ----------------------

// ----------------------
// Small utility components
// ----------------------
const MiniLabel: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="flex items-center justify-between text-sm">
    <div className="text-slate-700">{label}</div>
    <div className="font-medium text-slate-900">{value}</div>
  </div>
);

const ProgressBar: React.FC<{ value: number }> = ({ value }) => (
  <div className="w-full bg-slate-100 rounded-xl h-3">
    <div
      className="h-3 rounded-xl bg-slate-700"
      style={{ width: `${value * 10}%` }}
    />
  </div>
);

// Circular gauge drawn with simple SVG
function CircularGauge({ value = 72, size = 140, stroke = 12 }) {
  const normalized = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = ((100 - normalized) / 100) * c;

  // Color logic: red -> yellow -> green
  let color = "#F97316";
  if (normalized >= 71) color = "#16A34A";
  else if (normalized >= 41) color = "#F59E0B";

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <defs>
        <filter id="gShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="8"
            floodColor="#000"
            floodOpacity="0.08"
          />
        </filter>
      </defs>
      <g transform={`translate(${size / 2},${size / 2})`}>
        <circle r={r} stroke="#E6E7EA" strokeWidth={stroke} fill="none" />
        <circle
          r={r}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={pct}
          transform={`rotate(-90)`}
          style={{ filter: "url(#gShadow)" }}
        />
        <text
          x="0"
          y="-6"
          textAnchor="middle"
          className="text-slate-800"
          style={{ fontSize: 20, fontWeight: 700 }}
        >
          {value}
        </text>
        <text
          x="0"
          y="18"
          textAnchor="middle"
          className="text-slate-500"
          style={{ fontSize: 12 }}
        >
          MSAI
        </text>
      </g>
    </svg>
  );
}

// ----------------------
// Main component
// ----------------------
export default function FinancialSelfAwarenessMap() {
  const { data } = useMetricReport();
  if (!data)
    return (
      <div>
        <span
          className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700 align-middle"
          aria-hidden="true"
        />
        Loading...
      </div>
    );
  const { msai, moneyScripts, behavioral, emotions, attachment } = data;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Financial Self-Awareness Map
          </h2>
          <p className="text-sm text-slate-500">
            A concise snapshot of what's shaping your financial life
          </p>
        </div>
        {/*
        <div className="flex gap-3 items-center">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-sm">
            <Info size={16} /> Export PDF
          </button>
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">
            Download Data
          </button>
        </div>
        */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-12 gap-6"
      >
        {/* Left column: Money Scripts (radar) & Emotional */}
        <div className="col-span-12 bg-white rounded-2xl p-12 shadow-sm border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-75 h-75">
              <RadarChart
                outerRadius={75}
                width={265}
                height={265}
                data={moneyScripts.map((d) => ({
                  subject: d.subject,
                  A: d.value,
                }))}
              >
                <PolarGrid />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "#0f172a", fontSize: 11 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} />
                <Radar
                  name="scripts"
                  dataKey="A"
                  stroke="#2563EB"
                  fill="#2563EB"
                  fillOpacity={0.15}
                />
              </RadarChart>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-slate-900">
                Money Scripts
              </h3>
              <p className="text-sm text-slate-500 mb-3">
                Which beliefs currently shape your financial decisions.
              </p>

              <div className="space-y-2">
                {moneyScripts.map((m) => (
                  <div key={m.subject} className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#2563EB" }}
                      />
                    </div>
                    <div className="flex-1">
                      <MiniLabel label={m.subject} value={`${m.value}/10`} />
                      <div className="mt-1">
                        <ProgressBar value={m.value} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <h4 className="text-sm font-medium text-slate-800">
              Emotional Driver
            </h4>
            <div className="flex items-center gap-4 mt-3">
              <div className="w-20 h-20 flex items-center justify-center">
                {/* emotion ring */}
                <svg width="72" height="72">
                  <circle
                    cx="36"
                    cy="36"
                    r="28"
                    stroke="#F97316"
                    strokeWidth="8"
                    fill="none"
                    strokeOpacity="0.18"
                  />
                  <circle
                    cx="36"
                    cy="36"
                    r="28"
                    stroke="#F97316"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${
                      (emotions.Anxiety / 10) * (2 * Math.PI * 28)
                    } ${2 * Math.PI * 28}`}
                    strokeLinecap="round"
                    transform="rotate(-90 36 36)"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-slate-700">Anxiety-driven</div>
                <div className="text-xs text-slate-500">
                  Intensity: {emotions.Anxiety}/10
                </div>
                <div className="mt-2 text-sm text-slate-500">
                  Sub-drivers: Guilt {emotions.Guilt}/10 · Empowerment{" "}
                  {emotions.Empowerment}/10
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center column: Core gauge */}
        <div className="col-span-6 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center w-full h-full border border-slate-100">
            <CircularGauge value={msai} size={160} stroke={14} />
            <div className="mt-3 text-center">
              <div className="text-sm text-slate-500">
                Money Self-Awareness Index
              </div>
              <div className="text-xs text-slate-400">
                Reflective and growing
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Behavioral  */}
        <div className="col-span-6 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-medium text-slate-900">
            Behavioral Dimensions
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            How you tend to act with money — where you are strong and where
            tension shows up.
          </p>

          <div className="space-y-4">
            {behavioral.map((b) => (
              <div key={b.name} className="">
                <MiniLabel label={b.name} value={`${b.value}/10`} />
                <div className="mt-2">
                  <ProgressBar value={b.value} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full width: attachment style */}
        <div className="col-span-12 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mt-2">
          <h3 className="text-lg font-medium text-slate-900">
            Attachment Style
          </h3>
          <p className="text-xs text-slate-500 mb-3">
            Your emotional pattern around closeness vs. distance with money.
          </p>

          <div className="w-full bg-slate-50 rounded-lg relative flex items-center justify-center">
            <Grid2D
              x={attachment.avoidance}
              y={attachment.anxiety}
              xLabels={["Lower Avoidance", "Higher Avoidance"]}
              yLabels={["Lower Anxiety", "Higher Anxiety"]}
            />
          </div>

          <div className="mt-3 text-xs text-slate-500">
            Note: Your scores show both worry and a tendency to pull away — this
            can lead to cycles of overplanning and avoidance.
          </div>
        </div>

        {/* Full width: gap meter + strengths */}
        <div className="col-span-12 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mt-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-slate-900">
                Reality vs. Vision — The Gap
              </h3>
              <p className="text-sm text-slate-500">
                Where you are today vs. the financial life you described
                wanting.
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">Overall alignment</div>
              <div className="text-2xl font-bold text-slate-900">68%</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-slate-50">
              <div className="text-xs text-slate-500">Financial Confidence</div>
              <div className="text-sm font-medium mt-1">60 / 90</div>
              <div className="mt-2">
                <ProgressBar value={6} />
              </div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50">
              <div className="text-xs text-slate-500">Emotional Calm</div>
              <div className="text-sm font-medium mt-1">55 / 85</div>
              <div className="mt-2">
                <ProgressBar value={5.5} />
              </div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50">
              <div className="text-xs text-slate-500">Goal Clarity</div>
              <div className="text-sm font-medium mt-1">70 / 95</div>
              <div className="mt-2">
                <ProgressBar value={7} />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-white border border-slate-100">
              <div className="text-xs text-slate-500">Top Strengths</div>
              <ul className="mt-2 text-sm text-slate-700 list-disc list-inside">
                <li>Future-focused planning</li>
                <li>Reliable and detail-oriented</li>
                <li>Strong vigilance helps catch risks</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-100">
              <div className="text-xs text-slate-500">Primary Growth Edges</div>
              <ul className="mt-2 text-sm text-slate-700 list-disc list-inside">
                <li>Tendency to avoid looking at accounts when stressed</li>
                <li>Guilt around spending reduces enjoyment</li>
                <li>Overcontrol can exhaust motivation</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
