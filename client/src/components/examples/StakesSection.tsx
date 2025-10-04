import { StakesSection } from '../StakesSection';

export default function StakesSectionExample() {
  return (
    <div className="p-6">
      <StakesSection 
        costOfInaction="If you continue avoiding your finances, the anxiety will likely grow. You may miss opportunities to optimize your money, and the gap between where you are and where you want to be will widen. Most importantly, you'll continue carrying the emotional burden of not knowing."
        rewardOfAction="By addressing these patterns, you can transform your relationship with money from one of anxiety to one of confidence. You'll make decisions aligned with your values, feel in control, and experience the peace of mind you're seeking. Your family security—which matters most to you—will be on solid ground."
        barriers={[
          "Fear of what you might discover when you look closely",
          "Not knowing where to start or who to trust",
          "Worry that change will be too difficult or time-consuming"
        ]}
      />
    </div>
  );
}
