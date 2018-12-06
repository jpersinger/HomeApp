import { chain } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import IconButton from "../../../components/icon/iconButton";
import theme from "../../../components/theme";
import { sortByDate } from "../../../services";
import { Message } from "../../../services/home_services/home_services.definitions";
import { RootState } from "../../../services/redux/reducers";
import { AddMessageContainer } from "./components";
import NewReply from "./messageRow/newReply";
import SingleMessageChain from "./singleMessageChain";

interface Props {
  allMessages: Message[];
}

const MessageBoard = ({ allMessages }: Props) => {
  const [newReplyModalOpen, setNewReplyModalOpen] = useState(false);

  const topLevelMessages = chain(allMessages)
    .cloneDeep()
    .remove(({ parentMessage }) => !parentMessage)
    .sort((message1, message2) =>
      sortByDate(message1.created, message2.created, true)
    )
    .valueOf();

  return (
    <React.Fragment>
      <div style={{ width: "80vw", minWidth: 350, marginLeft: "10vw" }}>
        {topLevelMessages.map(message => (
          <div key={message.id} style={{ marginBottom: "1em" }}>
            <SingleMessageChain
              currentMessage={message}
              messages={allMessages}
            />
          </div>
        ))}
      </div>

      <AddMessageContainer>
        <IconButton
          name="add"
          size={50}
          onClick={() => setNewReplyModalOpen(true)}
          container
          containerFill={theme.colors.primary}
        />
      </AddMessageContainer>
      {newReplyModalOpen && (
        <NewReply
          close={() => {
            setNewReplyModalOpen(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default connect(({ home: { allMessages } }: RootState) => ({
  allMessages
}))(MessageBoard);
