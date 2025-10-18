import { GapVisualization } from '../GapVisualization';

export default function GapVisualizationExample() {
  return (
    <div className="p-6">
      <GapVisualization 
        currentState="I feel anxious about money and avoid looking at my accounts. I save automatically but don't know exactly where I stand."
        idealState="I want to feel confident and in control of my finances, with clear visibility into my money and peace of mind about my future."
        progress={40}
        analysis="The distance between where you are and where you want to be isn't just about numbers—it's about shifting from anxiety-driven avoidance to empowered awareness. Your strong future orientation will help here, but your anxiety pattern will need to be addressed to make sustainable progress. The good news is that awareness is the first step, and you've already taken it."
      />
    </div>
  );
}
