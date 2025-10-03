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
        const containerRect = commentRef.current.parentElement?.getBoundingClientRect();

        if (containerRect) {
          const relativeTop = messageRect.top - containerRect.top;
          setTopPosition(relativeTop);
        }
      }
    };

    updatePosition();

    // Update position on scroll
    const scrollContainer = commentRef.current?.parentElement;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);

      return () => {
        scrollContainer.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [messageRef]);

  return (
    <div
      ref={commentRef}
      className="absolute bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm transition-all duration-200"
      style={{ top: `${topPosition}px`, right: '16px', left: '16px' }}
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
