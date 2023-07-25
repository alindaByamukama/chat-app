/* eslint-disable react/prop-types */
import { MultiChatWindow, MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced';

const privateId = import.meta.env.VITE_PRIVATE_ID;

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    privateId,
    props.user.username,
    props.user.secret
  );

  return (
    <div className="background">
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};

export default ChatsPage;
