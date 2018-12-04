import {
  Income,
  MonthlyExpense,
  PiggyBank
} from "../../budget_services/budget.definitions";
import {
  ADD_INCOME,
  ADD_MONTHLY_EXPENSE,
  ADD_PIGGY_BANK,
  DELETE_INCOME,
  DELETE_MONTHLY_EXPENSE,
  DELETE_PIGGY_BANK,
  SET_INCOMES,
  SET_MONTHLY_EXPENSES,
  SET_PIGGY_BANKS
} from "../constants";

export const setMonthlyExpenses = (monthlyExpenses: MonthlyExpense[]) => ({
  type: SET_MONTHLY_EXPENSES,
  monthlyExpenses
});

export const addMonthlyExpense = (newMonthlyExpense: MonthlyExpense) => ({
  type: ADD_MONTHLY_EXPENSE,
  newMonthlyExpense
});

export const deleteMonthlyExpense = (title: string) => ({
  type: DELETE_MONTHLY_EXPENSE,
  title
});

export const setPiggyBanks = (piggyBanks: PiggyBank[]) => ({
  type: SET_PIGGY_BANKS,
  piggyBanks
});

export const addPiggyBank = (newPiggyBank: PiggyBank) => ({
  type: ADD_PIGGY_BANK,
  newPiggyBank
});

export const deletePiggyBank = (title: string) => ({
  type: DELETE_PIGGY_BANK,
  title
});

export const setIncomes = (incomes: Income[]) => ({
  type: SET_INCOMES,
  incomes
});

export const addIncome = (newIncome: Income) => ({
  type: ADD_INCOME,
  newIncome
});

export const deleteIncome = (id: string) => ({
  type: DELETE_INCOME,
  id
});
