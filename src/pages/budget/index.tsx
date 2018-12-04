import React from "react";
import Incomes from "./incomes";
import MonthlyExpenses from "./monthlyExpenses";
import PiggyBanks from "./piggyBanks";

const Budget = () => {
  return (
    <div>
      <MonthlyExpenses />
      <PiggyBanks />
      <Incomes />
    </div>
  );
};

export default Budget;
