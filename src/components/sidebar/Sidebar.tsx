import Message, { MessageVariant, type MessageProps } from './components/Message';

const Sidebar = () => {
  const dummyMessages: MessageProps[] = [
    {
      id: 1,
      variant: MessageVariant.TEXT,
      text: "Welcome! I'm your AI assistant.",
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      variant: MessageVariant.TEXT,
      text: 'I can help you with various tasks and answer your questions.',
      timestamp: '10:31 AM',
    },
    {
      id: 3,
      variant: MessageVariant.COACHABLE_MOMENT,
      text: 'You mentioned the price - remember to emphasize value before discussing cost.',
      utteranceIndex: 42,
      timestamp: '10:32 AM',
    },
    {
      id: 4,
      variant: MessageVariant.TEXT,
      text: "I'm analyzing your data now...",
      timestamp: '10:35 AM',
    },
    {
      id: 5,
      variant: MessageVariant.COACHABLE_MOMENT,
      text: 'Great job building rapport! The customer responded positively to your personal anecdote.',
      utteranceIndex: 58,
      timestamp: '10:36 AM',
    },
    {
      id: 6,
      variant: MessageVariant.TEXT,
      text: 'Would you like me to generate a detailed report?',
      timestamp: '10:38 AM',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-red-600">
        <h1 className="text-2xl font-bold text-white">HELLO TITLE</h1>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {dummyMessages.map((msg) => (
          <Message key={msg.id} {...msg} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
