import React from "react";
import { FullBudgetContainer } from "./components";
import GeneralBudgetDisplay from "./general";
import Incomes from "./incomes";
import MonthlyExpenses from "./monthlyExpenses";
import PiggyBanks from "./piggyBanks";

const Budget = () => (
  <FullBudgetContainer>
    <GeneralBudgetDisplay />
    <MonthlyExpenses />
    <PiggyBanks />
    <Incomes />
  </FullBudgetContainer>
);

export default Budget;
