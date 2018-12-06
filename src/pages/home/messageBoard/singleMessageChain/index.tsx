import React from "react";
import { sortByDate } from "../../../../services";
import { Message } from "../../../../services/home_services/home_services.definitions";
import MessageRow from "../messageRow";
import { getImmediateChildren } from "../services";

interface Props {
  currentMessage: Message;
  messages: Message[];
}

const SingleMessageChain = ({ currentMessage, messages }: Props) => {
  const allChildren = getImmediateChildren(currentMessage.id, messages);
  const sortedChildren = allChildren.sort((message1, message2) =>
    sortByDate(message1.created, message2.created)
  );

  return (
    <div>
      <MessageRow {...currentMessage} />
      {sortedChildren.map(message => (
        <div key={message.id} style={{ marginLeft: "1em" }}>
          <SingleMessageChain currentMessage={message} messages={messages} />
        </div>
      ))}
    </div>
  );
};

export default SingleMessageChain;
