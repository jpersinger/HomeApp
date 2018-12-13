import { isString } from "lodash";
import { sendDeleteRequest, sendGetRequest, sendPostRequest } from ".";
import {
  GeneralBudget,
  Income,
  MonthlyExpense,
  PiggyBank
} from "../budget_services/budget.definitions";
import store from "../redux";
import {
  setGeneralBudget,
  setIncomes,
  setMonthlyExpenses,
  setPiggyBanks
} from "../redux/actions/budget";
import {
  BUDGET_HASH,
  GENERAL_BUDGET_BRYAN_CREDIT_URL,
  GENERAL_BUDGET_JULIE_CREDIT_URL,
  GENERAL_BUDGET_POST_URL,
  GENERAL_BUDGET_URL,
  INCOME_HASH,
  MONTHLY_EXPENSES_HASH,
  PIGGY_BANKS_HASH,
  SERVER_URL
} from "./constants";

export const setBudgetInStore = () => {
  getGeneralBudget().then(generalBudget => {
    store.dispatch(setGeneralBudget(generalBudget));
  });

  getMonthlyExpenses().then(monthlyExpenses => {
    store.dispatch(setMonthlyExpenses(monthlyExpenses));
  });

  getPiggyBanks().then(piggyBanks => {
    store.dispatch(setPiggyBanks(piggyBanks));
  });

  getIncomes().then(incomes => {
    store.dispatch(setIncomes(incomes));
  });
};

// GENERAL BUDGET
const cleanBudgetData = (data: GeneralBudget): GeneralBudget => {
  const generalBudget: GeneralBudget = {
    general: {
      bankAmount: 0
    },
    julie_credit: {
      amount: 0
    },
    bryan_credit: {
      amount: 0
    }
  };

  if (data.general) {
    if (isString(data.general.bankAmount)) {
      data.general.bankAmount = parseInt(data.general.bankAmount);
    }
    generalBudget.general = data.general;
  }
  if (data.julie_credit) {
    if (isString(data.julie_credit.amount)) {
      data.julie_credit.amount = parseInt(data.julie_credit.amount);
    }
    generalBudget.julie_credit = data.julie_credit;
  }
  if (data.bryan_credit) {
    if (isString(data.bryan_credit.amount)) {
      data.bryan_credit.amount = parseInt(data.bryan_credit.amount);
    }
    generalBudget.bryan_credit = data.bryan_credit;
  }

  return generalBudget;
};

export const getGeneralBudget = (): Promise<GeneralBudget> =>
  sendGetRequest<GeneralBudget>(GENERAL_BUDGET_URL, cleanBudgetData);

export const sendUpdateGeneralBankInfo = (amount: number) => {
  sendPostRequest(
    SERVER_URL + GENERAL_BUDGET_POST_URL,
    JSON.stringify({ amount })
  );
};

export const sendUpdateCreditCardInfo = (
  type: "Julie" | "Bryan",
  amount: number
) => {
  const hash =
    SERVER_URL +
    (type === "Julie"
      ? GENERAL_BUDGET_JULIE_CREDIT_URL
      : GENERAL_BUDGET_BRYAN_CREDIT_URL);
  sendPostRequest(hash, JSON.stringify({ amount }));
};

// MONTHLY EXPENSES
const getMonthlyExpenses = (): Promise<MonthlyExpense[]> =>
  sendGetRequest<MonthlyExpense[]>(BUDGET_HASH + MONTHLY_EXPENSES_HASH);

export const sendNewMonthlyExpense = (monthlyExpense: MonthlyExpense) => {
  sendPostRequest(
    SERVER_URL + BUDGET_HASH + MONTHLY_EXPENSES_HASH,
    JSON.stringify(monthlyExpense)
  );
};

export const sendDeleteMonthlyExpense = (title: string) => {
  sendDeleteRequest(SERVER_URL + BUDGET_HASH + MONTHLY_EXPENSES_HASH, {
    title
  });
};

// PIGGY BANKS
const getPiggyBanks = (): Promise<PiggyBank[]> =>
  sendGetRequest<PiggyBank[]>(BUDGET_HASH + PIGGY_BANKS_HASH);

export const sendNewPiggyBank = (piggyBank: PiggyBank) => {
  sendPostRequest(
    SERVER_URL + BUDGET_HASH + PIGGY_BANKS_HASH,
    JSON.stringify(piggyBank)
  );
};

export const sendDeletePiggyBank = (title: string) => {
  sendDeleteRequest(SERVER_URL + BUDGET_HASH + PIGGY_BANKS_HASH, { title });
};

// INCOMES
export const getIncomes = (): Promise<Income[]> =>
  sendGetRequest<Income[]>(BUDGET_HASH + INCOME_HASH);

export const sendNewIncome = (income: any) => {
  sendPostRequest(
    SERVER_URL + BUDGET_HASH + INCOME_HASH,
    JSON.stringify(income)
  );
};

export const sendDeleteIncome = (id: string) => {
  sendDeleteRequest(SERVER_URL + BUDGET_HASH + INCOME_HASH, { id });
};
