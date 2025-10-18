# Financial Wellness AI Coach - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from therapeutic wellness applications (Headspace, Calm) combined with modern fintech clarity (Monarch Money, Wealthfront). The design must create psychological safety while maintaining financial credibility.

**Core Principle**: Make vulnerability feel safe. Every design decision should reduce anxiety and build trust for honest self-reflection about money.

---

## Color Palette

### Light Mode
- **Primary (Trust Blue)**: 217 91% 60% - Calming, trustworthy, therapeutic
- **Secondary (Warm Neutral)**: 25 8% 45% - Grounded, approachable
- **Background**: 210 20% 98% - Soft, easy on eyes for long conversations
- **Surface**: 0 0% 100%
- **Text Primary**: 217 30% 20%
- **Text Secondary**: 217 15% 45%
- **Accent (Progress/Success)**: 152 60% 50% - Encouraging, growth-oriented

### Dark Mode
- **Primary**: 217 80% 65%
- **Background**: 217 25% 8%
- **Surface**: 217 20% 12%
- **Text Primary**: 210 20% 95%
- **Text Secondary**: 210 15% 70%

**Color Psychology**: Avoid anxiety-inducing reds or aggressive oranges. Use calming blues and warm neutrals to create therapeutic atmosphere.

---

## Typography

**Font Families** (via Google Fonts):
- **Headlines/Display**: 'Inter' (500-700 weights) - Modern, trustworthy, clean
- **Body/Conversation**: 'Inter' (400-500 weights) - Excellent readability for extended reading
- **Accent/Highlights**: 'Inter' (600 italic) - Gentle emphasis for quotes

**Type Scale**:
- Hero/Section Headers: text-4xl to text-5xl, font-semibold
- Conversation Questions: text-xl to text-2xl, font-medium, leading-relaxed
- User Responses: text-lg, font-normal, leading-relaxed
- Body Text: text-base, leading-loose (for comfort)
- UI Elements: text-sm to text-base

**Critical**: Generous line-height (leading-loose, leading-relaxed) throughout - conversations should breathe, never feel cramped.

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistency
- Component spacing: p-6, p-8
- Section gaps: gap-8, gap-12
- Vertical rhythm: py-12, py-16, py-20

**Container Strategy**:
- Conversation Area: max-w-3xl (optimal for reading comfort, feels intimate like therapy)
- Report Sections: max-w-4xl (allows for data visualization)
- Landing Hero: max-w-6xl with generous padding
- Full viewport sections: w-full with inner max-w-7xl

**Layout Philosophy**: Generous whitespace creates breathing room for difficult conversations. Never cram content.

---

## Component Library

### Landing Page Components

**Hero Section (60vh)**:
- Centered headline emphasizing "awareness" and "transformation"
- Subheadline explaining the therapeutic approach
- Single prominent CTA: "Start Your Assessment" (large, primary button)
- Trust indicators: "100% Confidential • No Credit Card Required • 15-20 minutes"
- Soft gradient background (217 95% 95% to 152 95% 95%) with subtle texture

**How It Works Section**:
- 4-column grid (mobile: stack) showing assessment phases
- Phase cards with number badges, icons, and descriptions
- Emphasize "adaptive," "personalized," "therapeutic"

**Testimonial/Results Section**:
- 3-column grid of quote cards with first names only
- Focus on emotional transformation: "I finally understand why I..." 
- Soft shadows, rounded corners (rounded-2xl)

**The Science Section**:
- Showcase psychological frameworks (Klontz Money Scripts, Attachment Theory)
- 2-column layout: Framework name + brief explanation
- Establishes credibility without intimidating

**Final CTA Section**:
- Full-width, colored background (primary color at 10% opacity)
- Centered CTA with softer secondary action: "Learn More About Rise Above Finance"

### Conversation Interface

**Chat Container**:
- Centered column (max-w-3xl) with ample padding
- Messages appear with gentle fade-in animation
- AI messages: left-aligned, light surface background, rounded-2xl
- User responses: right-aligned, primary color background (10% opacity), rounded-2xl
- Generous vertical spacing between exchanges (space-y-8)

**Progress Indicator**:
- Sticky top bar showing current phase (1 of 4) with progress bar
- Phase names visible: "Money Story" → "Current Reality" → "Vision" → "Activation"
- Subtle, non-intrusive (opacity-80 when scrolled)

**Input Area**:
- Fixed bottom with backdrop blur
- Large textarea (min-h-24) with placeholder: "Share as much or as little as feels comfortable..."
- Character count only if approaching limit
- Send button: Primary color, rounded-full with send icon
- Auto-resize textarea as user types

**Question Display**:
- Large, clear typography (text-xl)
- Question appears before input becomes active
- Phase transitions marked with gentle divider and encouraging message
- Follow-up questions indent slightly to show conversational threading

**Emotional Calibration Indicators**:
- Subtle visual cues when AI validates: soft green glow on AI message
- When normalizing: warm icon (heart or hands) next to message
- No loud notifications - everything subtle and supportive

### Report Interface

**Report Header**:
- User's name prominently
- Generation date and personalized greeting
- Encouraging introduction: "Here's what we discovered together..."

**Section Cards (4 main sections)**:
- Full-width cards with distinct colored left borders matching section theme
- Collapsible/expandable for digestibility
- Generous padding (p-8 to p-12)
- Quoted user responses in italic with subtle highlight background

**Money Personality Profile Card**:
- Dominant money script badge (rounded-full, primary color)
- Behavioral dimension radar chart (use Chart.js or similar)
- Emotional pattern callout box
- User quotes integrated naturally in flowing narrative

**Gap Visualization**:
- Horizontal progress bar showing current vs. ideal (40-60% range typical)
- Before/After comparison in 2-column grid
- Visual weight given to "Where You Want to Be" to inspire

**Data Visualizations**:
- Soft colors matching palette (no harsh primary data viz colors)
- Rounded corners on all charts
- Tooltips with encouragement, not just data
- Behavioral dimensions: radar chart or horizontal bars with labels

**Next Steps Section**:
- Clear, specific action items in numbered list
- Each action has checkbox (non-functional, visual only)
- Soft CTA to connect with Rise Above Finance (not pushy)

**Download/Share Options**:
- Download as PDF button (secondary style)
- Share progress option (optional, non-prominent)

---

## Interaction Patterns

**Conversation Flow**:
- Questions appear one at a time with 300ms fade
- Input disabled until question fully displayed
- User response submission triggers gentle loading state (3 animated dots)
- AI response types out gradually (60-80 WPM) for natural feel
- Scroll is smooth and automatic to latest message

**Transitions Between Phases**:
- Gentle full-screen transition card appears
- "Phase 1 Complete - You're doing great" + encouraging message
- Fade to next phase after 2-3 seconds
- Progress bar updates with subtle animation

**Micro-interactions**:
- Input focus: subtle glow (primary color)
- Button hover: slight scale (1.02) + shadow increase
- Card hover: subtle lift (shadow-lg)
- All animations: ease-in-out, 200-300ms

---

## Images

**Hero Section**: Large, warm photograph of diverse individuals in relaxed, contemplative setting (thinking, journaling, or in peaceful conversation). Conveys trust, diversity, and introspection. Should feel aspirational but relatable. Overlay: Subtle gradient (from transparent to background color) for text readability.

**How It Works Icons**: Use Heroicons (outline style) for phase indicators - simple, clean, not clinical.

**Report Illustrations**: Optional spot illustrations for each section (abstract, warm, non-corporate). If used, keep minimal and supportive of content, not decorative.

**No imagery** in the conversation interface itself - keep focus entirely on the dialogue.

---

## Accessibility & Emotional Safety

- All interactive elements: minimum 44x44px touch targets
- Focus states: visible 2px ring in primary color
- Color contrast: WCAG AAA for all body text
- Dark mode: Essential for late-night reflective sessions
- Loading states: Never leave user uncertain - always show progress
- Error states: Gentle, never accusatory. "Let's try that again" not "Error"
- Optional skip/pause: Allow users to save progress and return later

---

## Brand Voice in UI

- Button labels: "Start Your Journey," "Continue Reflecting," "See Your Insights" (not "Submit," "Next")
- Error messages: "Take your time - there's no rush" (not "Invalid response")
- Empty states: "Your story starts here..." (not "No data")
- Loading: "Creating your personalized insights..." (not "Processing...")

**Tone**: Warm therapist, not corporate financial advisor. Every word choice should reduce anxiety and encourage vulnerability.