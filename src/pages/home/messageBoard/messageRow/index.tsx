import React, { useState } from "react";
import Button from "../../../../components/button";
import theme from "../../../../components/theme";
import { Paragraph1, Paragraph3 } from "../../../../components/typography";
import { Message } from "../../../../services/home_services/home_services.definitions";
import { MessageRowContainer } from "../components";
import NewReply from "./newReply";

const MessageRow = (currentMessage: Message) => {
  const [replyModalOpen, setReplyModalOpen] = useState(false);

  const { parentMessage, creator, created, message } = currentMessage;

  return (
    <MessageRowContainer isTopLevel={!parentMessage}>
      <div style={{ paddingTop: "0.2em", color: theme.colors.darkGray }}>
        <Paragraph3>
          {creator} at {created}
        </Paragraph3>
      </div>
      <div style={{ paddingTop: "0.5em" }}>
        <Paragraph1>{message}</Paragraph1>
      </div>
      <Button
        textOnly
        fontSize="0.8em"
        onClick={() => {
          setReplyModalOpen(true);
        }}
      >
        Reply
      </Button>

      {replyModalOpen && (
        <NewReply
          parentMessage={currentMessage}
          close={() => {
            setReplyModalOpen(false);
          }}
        />
      )}
    </MessageRowContainer>
  );
};

export default MessageRow;
