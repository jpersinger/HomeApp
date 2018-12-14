import moment from "moment";
import { getUniqueId } from "../..";
import { PersonalGoal } from "../../personal_goals_services/personal_goals_services.definitions";
import {
  ADD_PERSONAL_GOAL,
  SET_PERSONAL_GOALS,
  SET_PERSONAL_GOAL_ARCHIVED,
  SET_PERSONAL_GOAL_COMPLETED
} from "../constants";

export const setPersonalGoals = (personalGoals: PersonalGoal[]) => ({
  type: SET_PERSONAL_GOALS,
  personalGoals
});

export const addPersonalGoal = (description: string) => {
  const personalGoal: PersonalGoal = {
    id: getUniqueId(),
    description,
    daysCompleted: [],
    created: moment().toISOString(),
    archiveDate: ""
  };

  return {
    type: ADD_PERSONAL_GOAL,
    personalGoal
  };
};

export const setPersonalGoalCompleted = (id: string) => ({
  type: SET_PERSONAL_GOAL_COMPLETED,
  id
});

export const setPersonalGoalArchived = (id: string, archived: boolean) => ({
  type: SET_PERSONAL_GOAL_ARCHIVED,
  id,
  archived
});
