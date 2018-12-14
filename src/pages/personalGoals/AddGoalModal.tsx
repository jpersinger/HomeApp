import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/button";
import { TextArea } from "../../components/inputs";
import Modal from "../../components/modal";
import theme from "../../components/theme";
import { addPersonalGoal } from "../../services/redux/actions/personalGoals";

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
