import React from "react";
import GeneralBudgetDisplay from "./general";
import Incomes from "./incomes";
import MonthlyExpenses from "./monthlyExpenses";
import PiggyBanks from "./piggyBanks";

const Budget = () => {
  return (
    <div>
      <GeneralBudgetDisplay />
      <MonthlyExpenses />
      <PiggyBanks />
      <Incomes />
    </div>
  );
};

export default Budget;
