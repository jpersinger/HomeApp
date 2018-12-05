import theme from "../../../../components/theme";

export const getNumberColor = (isBankInfo: boolean, amount: number) => {
  if ((isBankInfo && !amount) || (!isBankInfo && !!amount)) {
    return theme.colors.negative;
  }
  return theme.colors.affirmative;
};
