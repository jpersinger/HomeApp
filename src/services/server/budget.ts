import axios from "axios";
import {
  MonthlyExpense,
  PiggyBank
} from "../budget_services/budget.definitions";
import store from "../redux";
import {
  setIncomes,
  setMonthlyExpenses,
  setPiggyBanks
} from "../redux/actions/budget";
import {
  BUDGET_HASH,
  INCOME_HASH,
  MONTHLY_EXPENSES_HASH,
  PIGGY_BANK_HASH,
  SERVER_URL
} from "./constants";

export const setBudgetInStore = () => {
  getMonthlyExpenses().then(monthlyExpenses => {
    store.dispatch(setMonthlyExpenses(monthlyExpenses));
  });

  getPiggyBanks().then(piggyBanks => {
    store.dispatch(setPiggyBanks(piggyBanks));
  });

  getIncomes().then(incomes => {
    store.dispatch(setIncomes(incomes));
    console.log("incomes", incomes);
  });
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
      .get(SERVER_URL + BUDGET_HASH + PIGGY_BANK_HASH)
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
    SERVER_URL + BUDGET_HASH + PIGGY_BANK_HASH,
    JSON.stringify(piggyBank),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
};

export const sendDeletePiggyBank = (title: string) => {
  console.log("deleting", title);
  axios.delete(SERVER_URL + BUDGET_HASH + PIGGY_BANK_HASH, {
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
