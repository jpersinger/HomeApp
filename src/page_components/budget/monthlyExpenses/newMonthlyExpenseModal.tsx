import { isEmpty } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addMonthlyExpense } from "../../../services/redux/actions/budget";
import Button from "../../../ui_components/button";
import FormBuilder from "../../../ui_components/formHelper";
import { FormElement } from "../../../ui_components/formHelper/form.definitions";
import Modal from "../../../ui_components/modal";
import { MonthlyExpense } from "../budget.definitions";

interface Props {
  toggleOpen: () => void;
  addMonthlyExpense: (expense: MonthlyExpense) => void;
}

const NewMonthlyExpenseModal = ({ toggleOpen, addMonthlyExpense }: Props) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState(0);

  const elements: FormElement[] = [
    {
      key: "expense_title",
      header: "Title",
      value: title,
      placeholder: "Title",
      edit: (newTitle: string) => {
        setTitle(newTitle);
      },
      editOnChange: true
    },
    {
      key: "expense_amount",
      header: "Cost",
      subHeader: "per month",
      value: cost + "",
      placeholder: "Cost",
      edit: (newCost: string) => {
        setCost(parseFloat(newCost));
      },
      editOnChange: true
    }
  ];

  return (
    <Modal
      title="New Expense"
      content={
        <div style={{ padding: "1em" }}>
          <FormBuilder elements={elements} />
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
