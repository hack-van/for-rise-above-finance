import React from "react";

const Grid2D: React.FC<{
  x: number;
  y: number;
  xLabels: [string, string];
  yLabels: [string, string];
}> = ({ x, y, xLabels = ["Low", "High"], yLabels = ["Low", "High"] }) => {
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null);
  const width = ref?.clientWidth ?? 0;
  const height = width * 0.6;
  console.log("Grid2D width", width, height);

  // Map attachment coordinates for quadrant: x = avoidance (low->high left->right), y = anxiety (low->high bottom->top)
  const attX = Math.max(0, Math.min(10, x));
  const attY = Math.max(0, Math.min(10, y));

  return (
    <div
      ref={(e) => setRef(e)}
      className="w-full"
      style={{ height: height ?? `${height}px` }}
    >
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <line
          x1={width / 2}
          y1={10}
          x2={width / 2}
          y2={height - 10}
          stroke="#E6E7EA"
        />
        <line
          x1={10}
          y1={height / 2}
          x2={width - 10}
          y2={height / 2}
          stroke="#E6E7EA"
        />
        <text
          x={width / 2 + 10}
          y={15}
          fontSize="11"
          fill="#0f172a"
          textAnchor="middle"
        >
          {yLabels[1]}
        </text>
        <text
          x={width / 2 + 10}
          y={height - 10}
          fontSize="11"
          fill="#0f172a"
          textAnchor="middle"
        >
          {yLabels[0]}
        </text>
        <text x="10" y={height / 2 - 10} fontSize="11" fill="#0f172a">
          {xLabels[0]}
        </text>
        <text
          x={width - 10}
          y={height / 2 - 10}
          fontSize="11"
          fill="#0f172a"
          textAnchor="end"
        >
          {xLabels[1]}
        </text>

        {(() => {
          const plotX = 10 + (attX / 10) * (width - 20); // 10..210
          const plotY = height - 10 - (attY / 10) * (height - 20); // invert
          return (
            <circle
              cx={plotX}
              cy={plotY}
              r={8}
              fill="#F59E0B"
              stroke="#fff"
              strokeWidth={2}
            />
          );
        })()}
      </svg>
    </div>
  );
};

export default Grid2D;
