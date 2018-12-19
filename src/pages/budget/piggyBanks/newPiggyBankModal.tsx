import { isEmpty } from "lodash";
import moment from "moment";
import React, { useState } from "react";
import { connect } from "react-redux";
import { PiggyBank } from "../../../services/budget_services/budget.definitions";
import { addPiggyBank } from "../../../services/redux/actions/budget";
import Button from "../../../ui_components/button";
import { Input } from "../../../ui_components/inputs";
import Modal from "../../../ui_components/modal";

interface Props {
  toggleOpen: () => void;
  addPiggyBank: (piggyBank: PiggyBank) => void;
}

const NewPiggyBankModal = ({ toggleOpen, addPiggyBank }: Props) => {
  const [title, setTitle] = useState("");
  const [amountPerMonth, setAmountPerMonth] = useState(0);
  const [goalTotal, setGoalTotal] = useState(0);
  const [currentTotal, setCurrentTotal] = useState(0);

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
            type="number"
            step="0.01"
            placeholder="Amount Per Month"
            value={!!amountPerMonth ? amountPerMonth : ""}
            onChange={event => {
              setAmountPerMonth(parseInt(event.target.value));
            }}
          />
          <Input
            type="number"
            step="0.01"
            placeholder="Goal Amount"
            value={!!goalTotal ? goalTotal : ""}
            onChange={event => {
              setGoalTotal(parseInt(event.target.value));
            }}
          />
          <Input
            type="number"
            step="0.01"
            placeholder="Current Amount Towards Goal"
            value={!!currentTotal ? currentTotal : ""}
            onChange={event => {
              setCurrentTotal(parseInt(event.target.value));
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
              currentTotal,
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
