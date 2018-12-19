import { chain, reduce } from "lodash";
import moment from "moment";
import { BudgetState } from "../../services/redux/reducers/budget";
import theme from "../../ui_components/theme";

export const getPercentCompleteColor = (percentComplete: number): string => {
  if (percentComplete < 20) {
    return theme.colors.negative;
  }

  if (percentComplete < 40) {
    return theme.colors.secondary;
  }

  if (percentComplete < 60) {
    return theme.colors.darkBlue;
  }

  if (percentComplete < 80) {
    return theme.colors.primaryDark;
  }

  if (percentComplete === 100) {
    return theme.colors.affirmative;
  }

  return theme.colors.primary;
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
    (sum, { amountPerMonth, currentTotal, goalTotal }) => {
      if (currentTotal === goalTotal) {
        return sum;
      }
      return sum + amountPerMonth + currentTotal;
    },
    0
  );

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
