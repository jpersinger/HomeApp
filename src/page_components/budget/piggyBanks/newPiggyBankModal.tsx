import { isEmpty } from "lodash";
import moment from "moment";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addPiggyBank } from "../../../services/redux/actions/budget";
import Button from "../../../ui_components/button";
import FormBuilder from "../../../ui_components/formHelper";
import { FormElement } from "../../../ui_components/formHelper/form.definitions";
import Modal from "../../../ui_components/modal";
import { PiggyBank } from "../budget.definitions";

interface Props {
  toggleOpen: () => void;
  addPiggyBank: (piggyBank: PiggyBank) => void;
}

const NewPiggyBankModal = ({ toggleOpen, addPiggyBank }: Props) => {
  const [title, setTitle] = useState("");
  const [amountPerMonth, setAmountPerMonth] = useState(0);
  const [goalTotal, setGoalTotal] = useState(0);
  const [currentTotal, setCurrentTotal] = useState(0);

  const elements: FormElement[] = [
    {
      key: "piggy_bank_title",
      header: "Title",
      placeholder: "Title",
      value: title,
      edit: newTitle => {
        setTitle(newTitle);
      },
      editOnChange: true
    },
    {
      key: "piggy_bank_amount_per_month",
      header: "Amount",
      subHeader: "per month",
      placeholder: "Amount",
      value: amountPerMonth + "",
      edit: amountPerMonth => {
        setAmountPerMonth(parseFloat(amountPerMonth));
      },
      editOnChange: true
    },
    {
      key: "piggy_bank_goal_amount",
      header: "Goal",
      placeholder: "Goal",
      value: goalTotal + "",
      edit: newGoalAmount => {
        setGoalTotal(parseFloat(newGoalAmount));
      },
      editOnChange: true
    },
    {
      key: "piggy_bank_current",
      header: "Current Amount",
      subHeader: "towards goal",
      placeholder: "Current Amount",
      value: currentTotal + "",
      edit: newCurrentTotal => {
        setCurrentTotal(parseFloat(newCurrentTotal));
      },
      editOnChange: true
    }
  ];

  return (
    <Modal
      title="New Piggy Bank"
      content={
        <div style={{ padding: "1em" }}>
          <FormBuilder elements={elements} />
          {/* <Input
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
          /> */}
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
