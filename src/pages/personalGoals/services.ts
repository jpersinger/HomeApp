import { filter, some } from "lodash";
import moment from "moment";
import { isDateToday } from "../../services";
import { PersonalGoal } from "../../services/personal_goals_services/personal_goals_services.definitions";

export const getAllPersonalGoalsForDate = (
  currentDate: moment.Moment,
  personalGoals: PersonalGoal[]
): PersonalGoal[] =>
  filter(
    personalGoals,
    ({ archiveDate, created }) =>
      (!archiveDate ||
        moment(archiveDate)
          .endOf("day")
          .isSameOrAfter(currentDate.endOf("day"))) &&
      moment(created)
        .startOf("day")
        .isSameOrBefore(currentDate.startOf("day"))
  );

export const getPercentGoalsComplete = (
  personalGoals: PersonalGoal[]
): number => {
  const relevantPersonalGoals = filter(
    personalGoals,
    ({ archiveDate }) => !archiveDate
  );
  const numberCompletedToday = filter(
    relevantPersonalGoals,
    ({ daysCompleted }) => some(daysCompleted, day => isDateToday(day))
  ).length;

  return (numberCompletedToday / relevantPersonalGoals.length) * 100;
};
