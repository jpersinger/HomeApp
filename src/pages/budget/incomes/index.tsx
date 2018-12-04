import React, { useState } from "react";
import { connect } from "react-redux";
import { Income } from "../../../services/budget_services/budget.definitions";
import { deleteIncome } from "../../../services/redux/actions/budget";
import { RootState } from "../../../services/redux/reducers";
import { BudgetSection } from "../components";
import NewIncomeModal from "./newIncomeModal";

interface Props {
  incomes: Income[];
  deleteIncome: (id: string) => void;
}

const Incomes = ({ incomes, deleteIncome }: Props) => {
  const [newIncomeModalOpen, setNewIncomeModalOpen] = useState(false);

  const items = incomes.map(({ amount, dayReceived }) => ({
    title: `Day ${dayReceived}`,
    subtext: amount
  }));

  return (
    <div>
      <BudgetSection
        items={items}
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
          }}
          incomes={incomes}
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
