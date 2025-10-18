import { ReportHeader } from "@/components/ReportHeader";
import { PersonalitySection } from "@/components/PersonalitySection";
import { CurrentStateSection } from "@/components/CurrentStateSection";
import { GapVisualization } from "@/components/GapVisualization";
import { StakesSection } from "@/components/StakesSection";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

//todo: remove mock functionality
const mockReportData = {
  userName: "Sarah",
  date: "October 4, 2025",
  personality: {
    dominantScript: "Money Vigilance",
    emotionalPattern: "Anxiety-Driven",
    attachmentStyle: "Anxious-Avoidant",
    content: `Your relationship with money is shaped by strong Money Vigilance. You believe deeply in saving for emergencies and being prepared - this serves you well in building financial security, but your answers suggest it sometimes creates anxiety when you want to enjoy your money. As you shared, "I always feel like I need to save more, even when I know I have enough."

On the behavioral spectrum, you're highly future-oriented (8/10), which means you naturally think about long-term goals. However, this comes partly from a scarcity mindset (3/10 on the scarcity-abundance scale) rather than abundance. You mentioned feeling that "money could disappear at any moment" - this suggests you're saving because you fear "not having enough" rather than excitement about what you're building toward.

Your emotional pattern with money is primarily anxiety-driven. This manifests as automatic saving but avoidance of detailed tracking. This isn't a character flaw - it's a protective strategy that developed from watching your parents struggle financially during your childhood.

Your attachment style with money leans toward anxious-avoidant - you care deeply about money (anxiety) but prefer not to engage with it directly (avoidance). This often develops when money feels both important and threatening. The result is a cycle: anxiety leads to avoidance, which creates more anxiety because you don't know where you stand.

Interestingly, you score low (3/10) on the control dimension, meaning you prefer not to track closely because it feels overwhelming. This conflicts with your Money Vigilance beliefs, creating internal tension - you feel you "should" know where your money is, but looking at it triggers anxiety.`,
    quotes: [
      "I always feel like I need to save more, even when I know I have enough",
      "Money feels like it could disappear at any moment",
      "I know I should track everything, but when I try, I just feel overwhelmed"
    ]
  },
  currentState: {
    strengths: [
      {
        title: "Strong Future Orientation",
        description: "You naturally think long-term, which is one of the most important predictors of financial success. When you said 'I want my kids to never worry about money like I did,' it's clear you can envision your future and stay motivated by it. This is a tremendous asset that many people lack."
      },
      {
        title: "Consistent Automatic Saving",
        description: "Despite your anxiety, you've built the habit of automatic savings. This shows discipline and commitment to your goals, even when it feels uncomfortable."
      },
      {
        title: "Values-Driven Motivation",
        description: "Your financial goals are deeply connected to what matters most - family security. This emotional connection will fuel sustainable change."
      }
    ],
    patterns: [
      {
        title: "Anxiety-Driven Avoidance",
        description: "Your anxiety about money leads you to avoid looking at your finances closely, creating a cycle where not knowing increases your anxiety. As you mentioned, 'I save automatically but don't actually know where I stand.'"
      },
      {
        title: "Scarcity Mindset Despite Security",
        description: "Even with substantial savings, you feel money 'could disappear at any moment.' This scarcity lens prevents you from feeling secure no matter how much you save."
      },
      {
        title: "Internal Conflict Around Control",
        description: "You believe you 'should' track everything closely (Money Vigilance), but attempting to do so triggers overwhelming anxiety. This creates shame and self-judgment."
      }
    ]
  },
  gap: {
    currentState: "I feel anxious about money and avoid looking at my accounts closely. I save automatically but don't know exactly where I stand financially.",
    idealState: "I want to feel confident and in control of my finances, with clear visibility into my money and real peace of mind about my family's future.",
    progress: 40,
    analysis: "The distance between where you are and where you want to be isn't just about numbers - it's about shifting from anxiety-driven avoidance to empowered awareness. Your strong future orientation and consistent saving habits will help you here, but your anxiety pattern and scarcity mindset will need to be addressed to make sustainable progress. The good news? Awareness is the first step, and you've already taken it."
  },
  stakes: {
    costOfInaction: "If you continue avoiding your finances, the anxiety will likely intensify over time. You may miss opportunities to optimize your money for your family's goals, and the gap between where you are and where you want to be will widen. Most importantly, you'll continue carrying the emotional burden of not knowing - a weight that affects not just your finances but your overall well-being and relationships.",
    rewardOfAction: "By addressing these patterns, you can transform your relationship with money from one of anxiety to one of confidence. You'll make decisions aligned with your values of family security, feel genuinely in control, and experience the peace of mind you're seeking. Imagine looking at your accounts without fear, knowing exactly where you stand, and feeling proud of the financial foundation you're building for your family.",
    barriers: [
      "Fear of what you might discover when you look closely at your finances",
      "Not knowing where to start or who to trust for help",
      "Worry that change will be too difficult, time-consuming, or overwhelming"
    ]
  }
};

export default function Report() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-4 right-4 z-30">
        <ThemeToggle />
      </div>
      
      <ReportHeader 
        userName={mockReportData.userName} 
        date={mockReportData.date} 
      />
      
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <PersonalitySection 
          dominantScript={mockReportData.personality.dominantScript}
          emotionalPattern={mockReportData.personality.emotionalPattern}
          attachmentStyle={mockReportData.personality.attachmentStyle}
          content={mockReportData.personality.content}
          quotes={mockReportData.personality.quotes}
        />
        
        <CurrentStateSection 
          strengths={mockReportData.currentState.strengths}
          patterns={mockReportData.currentState.patterns}
        />
        
        <GapVisualization 
          currentState={mockReportData.gap.currentState}
          idealState={mockReportData.gap.idealState}
          progress={mockReportData.gap.progress}
          analysis={mockReportData.gap.analysis}
        />
        
        <StakesSection 
          costOfInaction={mockReportData.stakes.costOfInaction}
          rewardOfAction={mockReportData.stakes.rewardOfAction}
          barriers={mockReportData.stakes.barriers}
        />

        <div className="pt-8 border-t">
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready for the Next Step?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              You've gained powerful insights into your money patterns. 
              Now imagine working with a professional who can help you transform these insights into lasting change.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => window.open('https://riseabovefinance.com', '_blank')}
              data-testid="button-connect-advisor"
            >
              Connect with Rise Above Finance
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
