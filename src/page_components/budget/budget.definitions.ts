export interface GeneralBudget {
  general: GeneralBankBudget;
  julie_credit: CreditCard;
  bryan_credit: CreditCard;
}

export interface GeneralBankBudget {
  bankAmount: number;
  lastUpdated?: string;
}

export interface CreditCard {
  amount: number;
  lastUpdated?: string;
}

export interface MonthlyExpense {
  title: string;
  cost: number;
}

export interface PiggyBank {
  title: string;
  currentTotal: number;
  goalTotal: number;
  amountPerMonth: number;
  lastUpdated: string;
}

export interface Income {
  id: string;
  amount: number;
  dayReceived: number;
}
