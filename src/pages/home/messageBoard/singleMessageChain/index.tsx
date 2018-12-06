import React from "react";
import { Message } from "../../../../services/home_services/home_services.definitions";
import MessageRow from "../messageRow";
import { getImmediateChildren } from "../services";

interface Props {
  currentMessage: Message;
  messages: Message[];
}

const SingleMessageChain = ({ currentMessage, messages }: Props) => {
  return (
    <div>
      <MessageRow {...currentMessage} />
      {getImmediateChildren(currentMessage.id, messages).map(message => (
        <div key={message.id} style={{ marginLeft: "1em" }}>
          <SingleMessageChain currentMessage={message} messages={messages} />
        </div>
      ))}
    </div>
  );
};

export default SingleMessageChain;
