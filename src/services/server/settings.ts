import { cloneDeep, isEmpty } from "lodash";
import { sendGetRequest, sendPostRequest } from ".";
import { getUniqueId } from "..";
import store from "../redux";
import { setUserData } from "../redux/actions/settings";
import { UserData } from "../settings_services/settings_services.definitions";
import {
  DISPLAY_NAME_URL,
  LINKED_EMAILS_URL,
  PUSH_NOTIFICATIONS_URL,
  SETTINGS_HASH,
  TEXT_COLOR_URL
} from "./constants";

export const setUserDataInStore = (user: UserData) => {
  getUserData(user)
    .then(userData => {
      let fullUserData = cloneDeep(userData);
      if (isEmpty(fullUserData)) {
        fullUserData = {
          ...user,
          displayName: user.firstName,
          id: getUniqueId()
        };
        sendNewUser(fullUserData);
      }
      store.dispatch(setUserData(fullUserData));
    })
    .catch(err => {
      console.log(err);
    });
};

const getUserData = (user: UserData): Promise<UserData> =>
  sendGetRequest<UserData>(SETTINGS_HASH, undefined, {
    user: { ...user, pushNotificationsEnabled: undefined }
  });

export const sendNewUser = (user: UserData) => {
  sendPostRequest(SETTINGS_HASH, JSON.stringify(user));
};

export const sendDisplayName = (id: string, displayName: string) => {
  sendPostRequest(DISPLAY_NAME_URL, JSON.stringify({ id, displayName }));
};

export const sendTextColor = (id: string, textColor: string) => {
  sendPostRequest(TEXT_COLOR_URL, JSON.stringify({ id, textColor }));
};

export const sendLinkedEmails = (id: string, linkedEmails: string[]) => {
  sendPostRequest(
    LINKED_EMAILS_URL,
    JSON.stringify({
      id,
      linkedEmails: linkedEmails || []
    })
  );
};

export const sendPushNotificationsEnabled = (
  id: string,
  pushNotificationsEnabled: boolean
) => {
  sendPostRequest(
    PUSH_NOTIFICATIONS_URL,
    JSON.stringify({
      id,
      pushNotificationsEnabled
    })
  );
};
