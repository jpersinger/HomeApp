import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteMonthlyExpense } from "../../../services/redux/actions/budget";
import { RootState } from "../../../services/redux/reducers";
import { MonthlyExpense } from "../budget.definitions";
import { BudgetSection } from "../components";
import NewMonthlyExpenseModal from "./newMonthlyExpenseModal";

interface Props {
  expenses: MonthlyExpense[];
  deleteMonthlyExpense: (title: string) => void;
}

const MonthlyExpenses = ({ expenses, deleteMonthlyExpense }: Props) => {
  const [newExpenseModalOpen, setNewExpenseModalOpen] = useState(false);

  const items = expenses.map(({ title, cost }) => ({ title, subtext: cost }));

  return (
    <div>
      <BudgetSection
        items={items}
        sortOnSubtext
        onAdd={() => {
          setNewExpenseModalOpen(true);
        }}
        buttonText="Add New Expense"
        onDelete={(index: number) => {
          const title = expenses[index].title;
          deleteMonthlyExpense(title);
        }}
      />
      {newExpenseModalOpen && (
        <NewMonthlyExpenseModal
          toggleOpen={() => {
            setNewExpenseModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default connect(
  ({ budget: { allMonthlyExpenses } }: RootState) => ({
    expenses: allMonthlyExpenses
  }),
  { deleteMonthlyExpense }
)(MonthlyExpenses);
