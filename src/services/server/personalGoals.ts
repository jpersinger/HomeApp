import { sendGetRequest, sendPostRequest } from ".";
import { PersonalGoal } from "../personal_goals_services/personal_goals_services.definitions";
import store from "../redux";
import { setPersonalGoals } from "../redux/actions/personalGoals";
import {
  ADD_PERSONAL_GOAL_URL,
  PERSONAL_GOALS,
  UPDATE_PERSONAL_GOAL_URL
} from "./constants";
import ServerHandler from "./serverHandler";

export const setPersonalGoalsInStore = (id: string) => {
  getPersonalGoalsForUser(id).then(personalGoals => {
    store.dispatch(setPersonalGoals(personalGoals || []));
  });
};

const getPersonalGoalsForUser = (id: string): Promise<PersonalGoal[]> =>
  sendGetRequest<PersonalGoal[]>(PERSONAL_GOALS, undefined, { id });

export const sendNewPersonalGoal = (personalGoal: PersonalGoal) => {
  sendPostRequest(
    ADD_PERSONAL_GOAL_URL,
    JSON.stringify({ id: ServerHandler.userId, personalGoal })
  );
};

export const sendUpdatedDaysCompleted = (id: string, daysCompleted: string[]) =>
  sendPostRequest(
    UPDATE_PERSONAL_GOAL_URL,
    JSON.stringify({ id: ServerHandler.userId, data: { id, daysCompleted } })
  );

export const sendUpdateArchiveDate = (id: string, archiveDate: string) =>
  sendPostRequest(
    UPDATE_PERSONAL_GOAL_URL,
    JSON.stringify({ id: ServerHandler.userId, data: { id, archiveDate } })
  );
