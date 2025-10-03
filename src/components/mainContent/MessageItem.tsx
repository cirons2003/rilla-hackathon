import { forwardRef } from 'react';

interface MessageItemProps {
  message: {
    id: string;
    text: string;
    author: string;
    timestamp: Date;
  };
  index: number;
  isSelected?: boolean;
}

const MessageItem = forwardRef<HTMLDivElement, MessageItemProps>(
  ({ message, index, isSelected }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg shadow-sm p-4 mb-4 border transition-all ${
          isSelected
            ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-200'
            : 'bg-white border-gray-200 hover:border-gray-300'
        }`}
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900">{message.author}</h3>
          <span className="text-sm text-gray-500">{message.timestamp.toLocaleTimeString()}</span>
        </div>
        <p className="text-gray-700">{message.text}</p>
        <div className="mt-2 text-xs text-gray-400">Message #{index + 1}</div>
      </div>
    );
  }
);

MessageItem.displayName = 'MessageItem';

export default MessageItem;
