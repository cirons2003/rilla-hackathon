import React, { useEffect, useRef, useState } from 'react';

interface CommentProps {
  index: number;
  messageRef: React.RefObject<HTMLDivElement> | null;
}

const Comment: React.FC<CommentProps> = ({ index, messageRef }) => {
  const commentRef = useRef<HTMLDivElement>(null);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      if (messageRef?.current && commentRef.current) {
        const messageRect = messageRef.current.getBoundingClientRect();
        const scrollContainer = document.getElementById('messages-container');
        const commentParent = commentRef.current.parentElement;

        if (scrollContainer && commentParent) {
          const containerRect = scrollContainer.getBoundingClientRect();
          const commentParentRect = commentParent.getBoundingClientRect();

          // Calculate position relative to the comment's parent container
          const relativeTop = messageRect.top - commentParentRect.top;
          setTopPosition(Math.max(0, relativeTop));
        }
      }
    };

    updatePosition();

    // Listen to scroll events from the messages container
    const messagesContainer = document.getElementById('messages-container');
    if (messagesContainer) {
      messagesContainer.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);

      return () => {
        messagesContainer.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [messageRef, index]);

  return (
    <div
      ref={commentRef}
      className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm transition-all duration-200 mb-4"
      style={{
        marginTop: `${topPosition}px`,
        transition: 'margin-top 0.2s ease-out'
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold text-blue-900">Comment for Message #{index + 1}</h4>
        <button className="text-blue-600 hover:text-blue-800 text-xs">Edit</button>
      </div>
      <textarea
        className="w-full min-h-[80px] p-2 border border-blue-200 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Add your comment here..."
      />
      <div className="mt-2 flex justify-end">
        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default Comment;