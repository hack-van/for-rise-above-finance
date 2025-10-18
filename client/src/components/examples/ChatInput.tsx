import { ChatInput } from '../ChatInput';

export default function ChatInputExample() {
  return (
    <ChatInput 
      onSend={(msg) => console.log('Message sent:', msg)} 
      placeholder="Share as much or as little as feels comfortable..."
    />
  );
}
