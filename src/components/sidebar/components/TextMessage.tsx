interface TextMessageProps {
  text: string;
  timestamp: string;
}

const TextMessage = ({ text, timestamp }: TextMessageProps) => {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] p-3 rounded-lg bg-white text-gray-800 shadow-sm">
        <div className="font-semibold text-sm mb-1 text-red-600">Agent</div>
        <div>{text}</div>
        <div className="text-xs mt-1 text-gray-500">{timestamp}</div>
      </div>
    </div>
  );
};

export default TextMessage;