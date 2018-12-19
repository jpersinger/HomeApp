import moment from "moment";
import React, { useState } from "react";
import { connect } from "react-redux";
import { getUniqueId } from "../../../../services";
import { Message } from "../../../../services/home_services/home_services.definitions";
import { addMessage } from "../../../../services/redux/actions/home";
import Button from "../../../../ui_components/button";
import { TextArea } from "../../../../ui_components/inputs";
import Modal from "../../../../ui_components/modal";
import theme from "../../../../ui_components/theme";
import { Paragraph1 } from "../../../../ui_components/typography";

interface Props {
  close: () => void;
  parentMessage?: Message;
  addMessage: (message: Message) => void;
}

const NewReply = ({ parentMessage, close, addMessage }: Props) => {
  const [newReply, setNewReply] = useState("");

  return (
    <Modal
      title="New Reply"
      content={
        <React.Fragment>
          <TextArea
            style={{
              width: "90%",
              minWidth: 350,
              height: 200,
              marginLeft: "5%",
              marginTop: "1em",
              borderColor: theme.colors.gray
            }}
            onChange={event => {
              setNewReply(event.target.value);
            }}
          />
          {parentMessage && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "5%",
                marginTop: "3em"
              }}
            >
              <Paragraph1>Original Message:</Paragraph1>
              {parentMessage.message}
            </div>
          )}
        </React.Fragment>
      }
      footer={
        <Button
          disabled={!newReply}
          onClick={() => {
            addMessage({
              id: getUniqueId(),
              creator: "",
              message: newReply,
              created: moment().toISOString(),
              parentMessage: !!parentMessage ? parentMessage.id : undefined
            });
            close();
          }}
        >
          Save
        </Button>
      }
      close={close}
    />
  );
};

export default connect(
  null,
  { addMessage }
)(NewReply);
