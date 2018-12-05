import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../components/button";
import { Input } from "../../../components/inputs";
import Modal from "../../../components/modal";
import { getNextIncomeId } from "../../../services/budget_services";
import { Income } from "../../../services/budget_services/budget.definitions";
import { addIncome } from "../../../services/redux/actions/budget";

interface Props {
  toggleOpen: () => void;
  addIncome: (income: Income) => void;
}

const NewIncomeModal = ({ toggleOpen, addIncome }: Props) => {
  const [amount, setAmount] = useState(0);
  const [dayReceived, setDayReceived] = useState(0);

  return (
    <Modal
      title="New Income"
      content={
        <div>
          <Input
            placeholder="Amount"
            value={!!amount ? amount : ""}
            onChange={event => {
              if (!!event.target.value) {
                setAmount(parseInt(event.target.value));
              }
            }}
          />
          <Input
            placeholder="Day Received"
            value={!!dayReceived ? dayReceived : ""}
            onChange={event => {
              if (!!event.target.value) {
                setDayReceived(parseInt(event.target.value));
              }
            }}
          />
        </div>
      }
      close={toggleOpen}
      footer={
        <Button
          onClick={() => {
            addIncome({ amount, dayReceived, id: getNextIncomeId() });
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
