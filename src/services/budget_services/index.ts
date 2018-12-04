import { max } from "lodash";
import { Income } from "./budget.definitions";

export const getNextIncomeId = (incomes: Income[]): string => {
  if (!incomes.length) {
    return "0";
  }
  const nextId = (max(incomes.map(({ id }) => parseInt(id))) || 0) + 1;
  return `${nextId}`;
};
