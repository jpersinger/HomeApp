import axios from "axios";
import { isString } from "lodash";
import {
  GeneralBudget,
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
const cleanBudgetData = (data: any): GeneralBudget => {
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
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + GENERAL_BUDGET_URL)
      .then(data => {
        resolve(cleanBudgetData(data.data));
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendUpdateGeneralBankInfo = (amount: number) => {
  console.log("sending", amount);
  axios.post(SERVER_URL + GENERAL_BUDGET_POST_URL, JSON.stringify({ amount }), {
    headers: { "Content-Type": "application/json" }
  });
};

export const sendUpdateCreditCardInfo = (
  type: "Julie" | "Bryan",
  amount: number
) => {
  console.log("sending", amount);
  axios.post(
    SERVER_URL +
      (type === "Julie"
        ? GENERAL_BUDGET_JULIE_CREDIT_URL
        : GENERAL_BUDGET_BRYAN_CREDIT_URL),
    JSON.stringify({ amount }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
};

// MONTHLY EXPENSES
const getMonthlyExpenses = (): Promise<MonthlyExpense[]> =>
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + BUDGET_HASH + MONTHLY_EXPENSES_HASH)
      .then(data => {
        resolve(data.data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendNewMonthlyExpense = (monthlyExpense: MonthlyExpense) => {
  console.log("sending", monthlyExpense);
  axios.post(
    SERVER_URL + BUDGET_HASH + MONTHLY_EXPENSES_HASH,
    JSON.stringify(monthlyExpense),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
};

export const sendDeleteMonthlyExpense = (title: string) => {
  console.log("deleting", title);
  axios.delete(SERVER_URL + BUDGET_HASH + MONTHLY_EXPENSES_HASH, {
    params: { title }
  });
};

// PIGGY BANKS
const getPiggyBanks = (): Promise<PiggyBank[]> =>
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + BUDGET_HASH + PIGGY_BANKS_HASH)
      .then(data => {
        resolve(data.data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendNewPiggyBank = (piggyBank: PiggyBank) => {
  console.log("sending", piggyBank);
  axios.post(
    SERVER_URL + BUDGET_HASH + PIGGY_BANKS_HASH,
    JSON.stringify(piggyBank),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
};

export const sendDeletePiggyBank = (title: string) => {
  console.log("deleting", title);
  axios.delete(SERVER_URL + BUDGET_HASH + PIGGY_BANKS_HASH, {
    params: { title }
  });
};

// INCOMES
export const getIncomes = (): Promise<any[]> =>
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + BUDGET_HASH + INCOME_HASH)
      .then(data => {
        resolve(data.data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendNewIncome = (income: any) => {
  console.log("sending", income);
  axios.post(SERVER_URL + BUDGET_HASH + INCOME_HASH, JSON.stringify(income), {
    headers: { "Content-Type": "application/json" }
  });
};

export const sendDeleteIncome = (id: string) => {
  console.log("deleting", id);
  axios.delete(SERVER_URL + BUDGET_HASH + INCOME_HASH, {
    params: { id }
  });
};
