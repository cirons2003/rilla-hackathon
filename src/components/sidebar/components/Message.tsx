import TextMessage from './TextMessage';
import CoachableMomentMessage from './CoachableMomentMessage';

export enum MessageVariant {
  TEXT = 'TEXT',
  COACHABLE_MOMENT = 'COACHABLE_MOMENT',
}

export interface BaseMessageProps {
  id: number;
  timestamp: string;
}

interface TextMessageData extends BaseMessageProps {
  variant: MessageVariant.TEXT;
  text: string;
}

interface CoachableMomentMessageData extends BaseMessageProps {
  variant: MessageVariant.COACHABLE_MOMENT;
  text: string;
  utteranceIndex: number;
}

export type MessageProps = TextMessageData | CoachableMomentMessageData;

const Message = (props: MessageProps) => {
  switch (props.variant) {
    case MessageVariant.TEXT:
      return <TextMessage text={props.text} timestamp={props.timestamp} />;
    case MessageVariant.COACHABLE_MOMENT:
      return (
        <CoachableMomentMessage
          text={props.text}
          utteranceIndex={props.utteranceIndex}
          timestamp={props.timestamp}
        />
      );
    default:
      return null;
  }
};

export default Message;
