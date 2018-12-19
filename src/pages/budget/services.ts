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
