import React, { useState } from "react";
import { connect } from "react-redux";
import { addPersonalGoal } from "../../services/redux/actions/personalGoals";
import Button from "../../ui_components/button";
import { TextArea } from "../../ui_components/inputs";
import Modal from "../../ui_components/modal";
import theme from "../../ui_components/theme";

interface Props {
  close: () => void;
  addPersonalGoal: (description: string) => void;
}

const AddGoalModal = ({ close, addPersonalGoal }: Props) => {
  const [newGoal, setNewGoal] = useState("");

  return (
    <Modal
      title="Add Goal"
      content={
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
            setNewGoal(event.target.value);
          }}
        />
      }
      footer={
        <Button
          disabled={!newGoal}
          onClick={() => {
            addPersonalGoal(newGoal);
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
  { addPersonalGoal }
)(AddGoalModal);
