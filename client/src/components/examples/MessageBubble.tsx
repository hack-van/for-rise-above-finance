import { MessageBubble } from '../MessageBubble';

export default function MessageBubbleExample() {
  return (
    <div className="p-6 space-y-4">
      <MessageBubble 
        message="What does financial success mean to you personally?" 
        isUser={false} 
      />
      <MessageBubble 
        message="To me, financial success means having enough saved that I don't worry about emergencies, and being able to retire comfortably without being a burden to my kids." 
        isUser={true} 
      />
      <MessageBubble message="" isUser={false} isTyping={true} />
    </div>
  );
}
