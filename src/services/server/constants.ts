// export const SERVER_URL = "https://kisby-home-app-server.herokuapp.com";
export const SERVER_URL = "http://localhost:3001";

export const HOME_HASH = "/home";
export const MESSAGES_HASH = "/messages";
export const RECIPE_HASH = "/recipes";
export const BUDGET_HASH = "/budget";
export const GENERAL_BUDGET_HASH = "/general";
export const MONTHLY_EXPENSES_HASH = "/monthlyexpenses";
export const PIGGY_BANKS_HASH = "/piggybanks";
export const INCOME_HASH = "/incomes";

export const MESSAGES_URL = HOME_HASH + MESSAGES_HASH;

export const GENERAL_BUDGET_URL = BUDGET_HASH + GENERAL_BUDGET_HASH;
export const MONTHLY_EXPENSES_URL = BUDGET_HASH + MONTHLY_EXPENSES_HASH;
export const PIGGY_BANKS_URL = BUDGET_HASH + PIGGY_BANKS_HASH;
export const INCOME_URL = BUDGET_HASH + INCOME_HASH;

export const GENERAL_BUDGET_POST_URL = GENERAL_BUDGET_URL + "/bank";
export const GENERAL_BUDGET_JULIE_CREDIT_URL = GENERAL_BUDGET_URL + "/julie";
export const GENERAL_BUDGET_BRYAN_CREDIT_URL = GENERAL_BUDGET_URL + "/bryan";
