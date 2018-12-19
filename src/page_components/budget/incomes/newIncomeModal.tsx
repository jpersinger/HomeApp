import React, { useState } from "react";
import { connect } from "react-redux";
import { getUniqueId } from "../../../services";
import { addIncome } from "../../../services/redux/actions/budget";
import Button from "../../../ui_components/button";
import FormBuilder from "../../../ui_components/formHelper";
import { FormElement } from "../../../ui_components/formHelper/form.definitions";
import Modal from "../../../ui_components/modal";
import { Income } from "../budget.definitions";

interface Props {
  toggleOpen: () => void;
  addIncome: (income: Income) => void;
}

const NewIncomeModal = ({ toggleOpen, addIncome }: Props) => {
  const [amount, setAmount] = useState(0);
  const [dayReceived, setDayReceived] = useState(0);

  const elements: FormElement[] = [
    {
      key: "income_amount",
      header: "Amount",
      value: amount + "",
      placeholder: "Amount",
      edit: (newAmount: string) => {
        setAmount(parseFloat(newAmount));
      },
      editOnChange: true
    },
    {
      key: "income_day_received",
      header: "Day Received",
      value: dayReceived + "",
      placeholder: "Day Received",
      edit: (newDayReceived: string) => {
        setDayReceived(parseInt(newDayReceived));
      },
      editOnChange: true
    }
  ];

  return (
    <Modal
      title="New Income"
      content={
        <div style={{ padding: "1em" }}>
          <FormBuilder elements={elements} />
        </div>
      }
      close={toggleOpen}
      footer={
        <Button
          onClick={() => {
            addIncome({ amount, dayReceived, id: getUniqueId() });
            toggleOpen();
          }}
          disabled={!amount || !dayReceived}
        >
          Save
        </Button>
      }
    />
  );
};

export default connect(
  null,
  { addIncome }
)(NewIncomeModal);
