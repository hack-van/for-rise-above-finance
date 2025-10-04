import { PersonalitySection } from '../PersonalitySection';

export default function PersonalitySectionExample() {
  return (
    <div className="p-6">
      <PersonalitySection 
        dominantScript="Money Vigilance"
        emotionalPattern="Anxiety-Driven"
        attachmentStyle="Anxious-Avoidant"
        content="Your relationship with money is shaped by strong Money Vigilance. You believe deeply in saving for emergencies and being prepared - this serves you well in building financial security, but your answers suggest it sometimes creates anxiety when you want to enjoy your money.

On the behavioral spectrum, you're highly future-oriented (8/10), which means you naturally think about long-term goals. However, this comes partly from a scarcity mindset rather than abundance. This suggests you're saving because you fear 'not having enough' rather than excitement about what you're building toward."
        quotes={[
          "I always feel like I need to save more, even when I know I have enough",
          "Money feels like it could disappear at any moment"
        ]}
      />
    </div>
  );
}
