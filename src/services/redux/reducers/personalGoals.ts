import produce from "immer";
import moment from "moment";
import { areDatesOnSameDay } from "../..";
import { PersonalGoal } from "../../personal_goals_services/personal_goals_services.definitions";
import {
  sendNewPersonalGoal,
  sendUpdateArchiveDate,
  sendUpdatedDaysCompleted
} from "../../server/personalGoals";
import {
  ADD_PERSONAL_GOAL,
  SET_PERSONAL_GOALS,
  SET_PERSONAL_GOAL_ARCHIVED,
  SET_PERSONAL_GOAL_COMPLETED
} from "../constants";

export interface PersonalGoalsState {
  allPersonalGoals: PersonalGoal[];
}

const initialState: PersonalGoalsState = {
  allPersonalGoals: []
};

export default (state = initialState, action: any) =>
  produce(state, newState => {
    switch (action.type) {
      case SET_PERSONAL_GOALS:
        newState.allPersonalGoals = action.personalGoals;
        break;

      case ADD_PERSONAL_GOAL:
        const personalGoal: PersonalGoal = action.personalGoal;
        sendNewPersonalGoal(personalGoal);
        newState.allPersonalGoals.push(personalGoal);
        break;

      case SET_PERSONAL_GOAL_COMPLETED:
        const index = state.allPersonalGoals.findIndex(
          ({ id }) => id === action.id
        );

        if (index === -1) {
          break;
        }

        const today = moment().toISOString();

        const dateIndex = state.allPersonalGoals[index].daysCompleted.findIndex(
          day => areDatesOnSameDay(today, day)
        );

        if (dateIndex === -1) {
          newState.allPersonalGoals[index].daysCompleted.push(today);
        } else {
          newState.allPersonalGoals[index].daysCompleted.splice(dateIndex, 1);
        }

        sendUpdatedDaysCompleted(
          action.id,
          newState.allPersonalGoals[index].daysCompleted
        );
        break;

      case SET_PERSONAL_GOAL_ARCHIVED:
        const archiveIndex = state.allPersonalGoals.findIndex(
          ({ id }) => id === action.id
        );

        if (archiveIndex === -1) {
          break;
        }

        const archiveDate = action.archived ? moment().toISOString() : "";
        newState.allPersonalGoals[archiveIndex].archiveDate = archiveDate;

        sendUpdateArchiveDate(action.id, archiveDate);
        break;
    }
  });
