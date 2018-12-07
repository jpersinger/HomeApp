import axios from "axios";
import { isEmpty } from "lodash";
import { sendPostRequest } from ".";
import store from "../redux";
import { setUserData } from "../redux/actions/settings";
import { UserData } from "../settings_services/settings_services.definitions";
import {
  DISPLAY_NAME_URL,
  LINKED_EMAILS_URL,
  PUSH_NOTIFICATIONS_URL,
  SERVER_URL,
  SETTINGS_HASH,
  TEXT_COLOR_URL
} from "./constants";

export const setUserDataInStore = (user: UserData) => {
  getUserData(user).then(userData => {
    store.dispatch(setUserData(userData));
    if (isEmpty(userData)) {
      sendNewUser({ ...user, displayName: user.firstName });
    }
  });
};

const getUserData = (user: UserData): Promise<UserData> =>
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + SETTINGS_HASH, { params: { user } })
      .then(data => {
        resolve(data.data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendNewUser = (user: UserData) => {
  console.log("sending", user);
  axios.post(SERVER_URL + SETTINGS_HASH, JSON.stringify(user), {
    headers: { "Content-Type": "application/json" }
  });
};

export const sendDisplayName = (id: string, displayName: string) => {
  sendPostRequest(DISPLAY_NAME_URL, { id, displayName });
};

export const sendTextColor = (id: string, textColor: string) => {
  sendPostRequest(TEXT_COLOR_URL, { id, textColor });
};

export const sendLinkedEmails = (id: string, linkedEmails: string[]) => {
  sendPostRequest(LINKED_EMAILS_URL, {
    id,
    linkedEmails: linkedEmails || []
  });
};

export const sendPushNotificationsEnabled = (
  id: string,
  pushNotificationsEnabled: boolean
) => {
  sendPostRequest(PUSH_NOTIFICATIONS_URL, {
    id,
    pushNotificationsEnabled
  });
};
