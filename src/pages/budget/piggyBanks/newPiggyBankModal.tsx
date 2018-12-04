import { isEmpty } from "lodash";
import moment from "moment";
import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../components/button";
import { Input } from "../../../components/inputs";
import Modal from "../../../components/modal";
import { PiggyBank } from "../../../services/budget_services/budget.definitions";
import { addPiggyBank } from "../../../services/redux/actions/budget";

interface Props {
  toggleOpen: () => void;
  addPiggyBank: (piggyBank: PiggyBank) => void;
}

const NewPiggyBankModal = ({ toggleOpen, addPiggyBank }: Props) => {
  const [title, setTitle] = useState("");
  const [amountPerMonth, setAmountPerMonth] = useState(0);
  const [goalTotal, setGoalTotal] = useState(0);

  return (
    <Modal
      title="New Piggy Bank"
      content={
        <div>
          <Input
            placeholder="Title"
            value={title}
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
          <Input
            placeholder="Amount Per Month"
            value={!!amountPerMonth ? amountPerMonth : ""}
            onChange={event => {
              if (!!event.target.value) {
                setAmountPerMonth(parseInt(event.target.value));
              }
            }}
          />
          <Input
            placeholder="Goal Amount"
            value={!!goalTotal ? goalTotal : ""}
            onChange={event => {
              if (!!event.target.value) {
                setGoalTotal(parseInt(event.target.value));
              }
            }}
          />
        </div>
      }
      close={toggleOpen}
      footer={
        <Button
          onClick={() => {
            addPiggyBank({
              title,
              amountPerMonth,
              currentTotal: 0,
              goalTotal: goalTotal,
              lastUpdated: JSON.stringify(moment())
            });
            toggleOpen();
          }}
          disabled={isEmpty(title) || !amountPerMonth}
        >
          Save
        </Button>
      }
    />
  );
};

export default connect(
  null,
  { addPiggyBank }
)(NewPiggyBankModal);
