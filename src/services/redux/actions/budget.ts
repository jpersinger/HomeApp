import {
  GeneralBudget,
  Income,
  MonthlyExpense,
  PiggyBank
} from "../../../page_components/budget/budget.definitions";
import {
  ADD_INCOME,
  ADD_MONTHLY_EXPENSE,
  ADD_PIGGY_BANK,
  DELETE_INCOME,
  DELETE_MONTHLY_EXPENSE,
  DELETE_PIGGY_BANK,
  SET_GENERAL_BUDGET,
  SET_INCOMES,
  SET_MONTHLY_EXPENSES,
  SET_PIGGY_BANKS,
  UPDATE_CREDIT_CARD,
  UPDATE_GENERAL_BANK_BUDGET
} from "../constants";

export const setGeneralBudget = (generalBudget: GeneralBudget) => ({
  type: SET_GENERAL_BUDGET,
  generalBudget
});

export const updateGeneralBankBudget = (amount: number) => ({
  type: UPDATE_GENERAL_BANK_BUDGET,
  amount
});

export const updateCreditCard = (
  person: "Julie" | "Bryan",
  amount: number
) => ({
  type: UPDATE_CREDIT_CARD,
  person,
  amount
});

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
