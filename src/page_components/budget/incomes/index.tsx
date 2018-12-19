import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteIncome } from "../../../services/redux/actions/budget";
import { RootState } from "../../../services/redux/reducers";
import { Income } from "../budget.definitions";
import { BudgetSection } from "../components";
import NewIncomeModal from "./newIncomeModal";

interface Props {
  incomes: Income[];
  deleteIncome: (id: string) => void;
}

const Incomes = ({ incomes, deleteIncome }: Props) => {
  const [newIncomeModalOpen, setNewIncomeModalOpen] = useState(false);
  console.log(newIncomeModalOpen);

  const items = incomes.map(({ amount, dayReceived }) => ({
    title: `Day ${dayReceived}`,
    subtext: amount
  }));

  return (
    <div>
      <BudgetSection
        items={items}
        sortOnSubtext={false}
        onAdd={() => {
          setNewIncomeModalOpen(true);
        }}
        buttonText="Add New Income"
        onDelete={(index: number) => {
          const id = incomes[index].id;
          deleteIncome(id);
        }}
      />
      {newIncomeModalOpen && (
        <NewIncomeModal
          toggleOpen={() => {
            setNewIncomeModalOpen(false);
            console.log("closing");
          }}
        />
      )}
    </div>
  );
};

export default connect(
  ({ budget: { allIncomes } }: RootState) => ({
    incomes: allIncomes
  }),
  { deleteIncome }
)(Incomes);
