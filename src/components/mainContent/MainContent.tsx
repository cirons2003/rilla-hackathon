import React, { useRef, useState } from 'react';
import MessageItem from './MessageItem';
import Comment from './Comment';

// Mock data for messages
const mockMessages = [
  { id: '1', text: 'Hello, this is the first message!', author: 'John Doe', timestamp: new Date() },
  { id: '2', text: 'Here\'s another message with some longer content to demonstrate how it looks.', author: 'Jane Smith', timestamp: new Date() },
  { id: '3', text: 'Third message in the list.', author: 'Bob Johnson', timestamp: new Date() },
  { id: '4', text: 'This is a longer message to show how the layout handles different content lengths. It contains multiple sentences and demonstrates the flexibility of our message component.', author: 'Alice Brown', timestamp: new Date() },
  { id: '5', text: 'Fifth message here!', author: 'Charlie Wilson', timestamp: new Date() },
  { id: '6', text: 'Another message to make the list scrollable.', author: 'David Lee', timestamp: new Date() },
  { id: '7', text: 'Keep adding messages to see the scroll behavior.', author: 'Emma Davis', timestamp: new Date() },
  { id: '8', text: 'This is message number eight.', author: 'Frank Miller', timestamp: new Date() },
  { id: '9', text: 'Almost at ten messages now!', author: 'Grace Taylor', timestamp: new Date() },
  { id: '10', text: 'Final message in our mock data.', author: 'Henry Anderson', timestamp: new Date() },
];

const MainContent = () => {
  const messageRefs = useRef<Map<number, React.RefObject<HTMLDivElement>>>(new Map());
  const [selectedMessageIndex, setSelectedMessageIndex] = useState<number>(0);

  // Initialize refs for each message
  mockMessages.forEach((_, index) => {
    if (!messageRefs.current.has(index)) {
      const newRef = React.createRef<HTMLDivElement>();
      messageRefs.current.set(index, newRef as React.RefObject<HTMLDivElement>);
    }
  });

  return (
    <div className="w-full h-full flex">
      {/* Messages Section - 65% width */}
      <div className="w-[65%] h-full overflow-y-auto p-6 pr-3" id="messages-container">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Messages</h1>
        <div className="space-y-4">
          {mockMessages.map((message, index) => (
            <div
              key={message.id}
              onClick={() => setSelectedMessageIndex(index)}
              className="cursor-pointer"
            >
              <MessageItem
                ref={messageRefs.current.get(index) || null}
                message={message}
                index={index}
                isSelected={selectedMessageIndex === index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Comment Section - 35% width */}
      <div className="w-[35%] h-full border-l border-gray-200 relative">
        <div className="sticky top-0 bg-white p-6 pb-2 border-b border-gray-100 z-10">
          <h2 className="text-lg font-semibold text-gray-800">Comments</h2>
        </div>
        <div className="relative p-6 pt-4">
          <Comment
            index={selectedMessageIndex}
            messageRef={messageRefs.current.get(selectedMessageIndex) || null}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;