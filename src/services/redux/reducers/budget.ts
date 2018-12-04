import produce from "immer";
import { cloneDeep, findIndex } from "lodash";
import {
  Income,
  MonthlyExpense,
  PiggyBank
} from "../../budget_services/budget.definitions";
import {
  sendDeleteIncome,
  sendDeleteMonthlyExpense,
  sendDeletePiggyBank,
  sendNewIncome,
  sendNewMonthlyExpense,
  sendNewPiggyBank
} from "../../server/budget";
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

export interface BudgetState {
  allMonthlyExpenses: MonthlyExpense[];
  allPiggyBanks: PiggyBank[];
  allIncomes: Income[];
}

const initialState: BudgetState = {
  allMonthlyExpenses: [],
  allPiggyBanks: [],
  allIncomes: []
};

export default (state = initialState, action: any) =>
  produce(state, newState => {
    switch (action.type) {
      case SET_MONTHLY_EXPENSES:
        newState.allMonthlyExpenses = action.monthlyExpenses;
        break;

      case ADD_MONTHLY_EXPENSE:
        const allMonthlyExpenses = cloneDeep(state.allMonthlyExpenses);
        sendNewMonthlyExpense(action.newMonthlyExpense);
        allMonthlyExpenses.push(action.newMonthlyExpense);
        newState.allMonthlyExpenses = allMonthlyExpenses;
        break;

      case DELETE_MONTHLY_EXPENSE:
        const allMonthlyExpensesClone = cloneDeep(state.allMonthlyExpenses);
        sendDeleteMonthlyExpense(action.title);
        const index = findIndex(allMonthlyExpensesClone, {
          title: action.title
        });
        allMonthlyExpensesClone.splice(index, 1);
        newState.allMonthlyExpenses = allMonthlyExpensesClone;
        break;

      case SET_PIGGY_BANKS:
        newState.allPiggyBanks = action.piggyBanks;
        break;

      case ADD_PIGGY_BANK:
        const allPiggyBanks = cloneDeep(state.allPiggyBanks);
        sendNewPiggyBank(action.newPiggyBank);
        allPiggyBanks.push(action.newPiggyBank);
        newState.allPiggyBanks = allPiggyBanks;
        break;

      case DELETE_PIGGY_BANK:
        const allPiggyBanksClone = cloneDeep(state.allPiggyBanks);
        sendDeletePiggyBank(action.title);
        const piggyBankIndex = findIndex(allPiggyBanksClone, {
          title: action.title
        });
        allPiggyBanksClone.splice(piggyBankIndex, 1);
        newState.allPiggyBanks = allPiggyBanksClone;
        break;

      case SET_INCOMES:
        newState.allIncomes = action.incomes;
        break;

      case ADD_INCOME:
        const allIncomes = cloneDeep(state.allIncomes);
        sendNewIncome(action.newIncome);
        allIncomes.push(action.newIncome);
        newState.allIncomes = allIncomes;
        break;

      case DELETE_INCOME:
        const allIncomesClone = cloneDeep(state.allIncomes);
        sendDeleteIncome(action.id);
        const incomeIndex = findIndex(allIncomesClone, {
          id: action.id
        });
        allIncomesClone.splice(incomeIndex, 1);
        newState.allIncomes = allIncomesClone;
        break;
    }
  });
