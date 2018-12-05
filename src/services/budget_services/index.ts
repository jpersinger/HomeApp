import { chain, reduce } from "lodash";
import moment from "moment";
import { BudgetState } from "../redux/reducers/budget";

export const getNextIncomeId = (): string => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export const getRemainingForMonth = ({
  generalBudget,
  allMonthlyExpenses,
  allPiggyBanks,
  allIncomes
}: BudgetState): number => {
  const today = moment();

  const allExpenseAmounts = reduce(
    allMonthlyExpenses,
    (sum, { cost }) => sum + cost,
    0
  );
  const allPiggyAmounts = reduce(
    allPiggyBanks,
    (sum, { amountPerMonth, currentTotal }) =>
      sum + amountPerMonth + currentTotal,
    0
  );

  console.log(allPiggyBanks, allPiggyAmounts);

  const withCreditRemoved =
    generalBudget.general.bankAmount -
    generalBudget.julie_credit.amount -
    generalBudget.bryan_credit.amount;

  const withMonthlyCostsRemoved =
    withCreditRemoved - allExpenseAmounts - allPiggyAmounts;

  const incomesNotInBankAmount = chain(allIncomes)
    .filter(({ dayReceived }) => dayReceived > today.date())
    .reduce((sum, { amount }) => sum + amount, 0)
    .valueOf();

  const withIncomes = withMonthlyCostsRemoved + incomesNotInBankAmount;

  return withIncomes;
};
