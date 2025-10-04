import { CurrentStateSection } from '../CurrentStateSection';

export default function CurrentStateSectionExample() {
  return (
    <div className="p-6">
      <CurrentStateSection 
        strengths={[
          {
            title: "Strong Future Orientation",
            description: "You naturally think long-term, which is one of the most important predictors of financial success. You can envision your future and stay motivated by it."
          },
          {
            title: "High Planning Capacity",
            description: "You have the ability to create and follow financial plans, a skill that will serve you well as you address other patterns."
          }
        ]}
        patterns={[
          {
            title: "Anxiety-Driven Avoidance",
            description: "Your anxiety about money leads you to avoid looking at your finances closely, creating a cycle where not knowing increases your anxiety."
          },
          {
            title: "Scarcity Mindset",
            description: "You tend to focus on what could go wrong rather than possibilities, which limits your ability to enjoy your financial progress."
          }
        ]}
      />
    </div>
  );
}
