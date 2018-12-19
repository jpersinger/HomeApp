import produce from "immer";
import {
  sendDisplayName,
  sendLinkedEmails,
  sendPushNotificationsEnabled,
  sendTextColor
} from "../../server/settings";
import { emptyUser } from "../../settings_services/constants";
import { UserData } from "../../settings_services/settings_services.definitions";
import {
  ADD_LINKED_EMAIL,
  AUTHENTICATE_USER,
  DELETE_LINKED_EMAIL,
  SET_PUSH_NOTIFICATIONS,
  SET_USER_DATA,
  UPDATE_DISPLAY_NAME,
  UPDATE_TEXT_COLOR
} from "../constants";

export interface SettingsState {
  isAuthenticated: boolean;
  user: UserData;
}

const initialState: SettingsState = {
  isAuthenticated: true,
  user: emptyUser
};

export default (state = initialState, action: any) =>
  produce(state, newState => {
    switch (action.type) {
      case AUTHENTICATE_USER:
        newState.isAuthenticated = true;
        newState.user = action.user;
        break;

      case SET_USER_DATA:
        newState.user = action.user;
        break;

      case UPDATE_DISPLAY_NAME:
        sendDisplayName(state.user.id, action.displayName);
        newState.user.displayName = action.displayName;
        break;

      case UPDATE_TEXT_COLOR:
        sendTextColor(state.user.id, action.textColor);
        newState.user.textColor = action.textColor;
        break;

      case ADD_LINKED_EMAIL:
        newState.user.linkedEmails.push(action.email);
        sendLinkedEmails(state.user.id, newState.user.linkedEmails);
        break;

      case DELETE_LINKED_EMAIL:
        const emailIndex = newState.user.linkedEmails.indexOf(action.email);
        newState.user.linkedEmails.splice(emailIndex, 1);
        sendLinkedEmails(state.user.id, newState.user.linkedEmails);
        break;

      case SET_PUSH_NOTIFICATIONS:
        sendPushNotificationsEnabled(
          state.user.id,
          action.pushNotificationsEnabled
        );
        newState.user.pushNotificationsEnabled =
          action.pushNotificationsEnabled;
        break;
    }
  });
