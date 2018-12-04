import { isEmpty } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../components/button";
import { Input } from "../../../components/inputs";
import Modal from "../../../components/modal";
import { MonthlyExpense } from "../../../services/budget_services/budget.definitions";
import { addMonthlyExpense } from "../../../services/redux/actions/budget";

interface Props {
  toggleOpen: () => void;
  addMonthlyExpense: (expense: MonthlyExpense) => void;
}

const NewMonthlyExpenseModal = ({ toggleOpen, addMonthlyExpense }: Props) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState(0);

  return (
    <Modal
      title="New Expense"
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
            placeholder="Amount"
            value={!!cost ? cost : ""}
            onChange={event => {
              if (!!event.target.value) {
                setCost(parseInt(event.target.value));
              }
            }}
          />
        </div>
      }
      close={toggleOpen}
      footer={
        <Button
          onClick={() => {
            addMonthlyExpense({ title, cost });
            toggleOpen();
          }}
          disabled={isEmpty(title) || !cost}
        >
          Save
        </Button>
      }
    />
  );
};

export default connect(
  null,
  { addMonthlyExpense }
)(NewMonthlyExpenseModal);
