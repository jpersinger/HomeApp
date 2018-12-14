import { handleAuthentication } from "../..";
import { setUserDataInStore } from "../../server/settings";
import { emptyUser } from "../../settings_services/constants";
import {
  GoogleUser,
  UserData
} from "../../settings_services/settings_services.definitions";
import {
  ADD_LINKED_EMAIL,
  AUTHENTICATE_USER,
  DELETE_LINKED_EMAIL,
  SET_PUSH_NOTIFICATIONS,
  SET_USER_DATA,
  UPDATE_DISPLAY_NAME,
  UPDATE_TEXT_COLOR
} from "../constants";

export const authenticateUser = (googleUser: GoogleUser) => {
  const user: UserData = {
    ...emptyUser,
    email: googleUser.w3.U3,
    fullName: googleUser.w3.ig,
    firstName: googleUser.w3.ofa,
    lastName: googleUser.w3.wea,
    linkedEmails: [googleUser.w3.U3]
  };

  setUserDataInStore(user);

  return {
    type: AUTHENTICATE_USER,
    user
  };
};

export const setUserData = (user: UserData) => {
  handleAuthentication(user.id);

  return {
    type: SET_USER_DATA,
    user
  };
};

export const updateDisplayName = (displayName: string) => ({
  type: UPDATE_DISPLAY_NAME,
  displayName
});

export const updateTextColor = (textColor: string) => ({
  type: UPDATE_TEXT_COLOR,
  textColor
});

export const addLinkedEmail = (email: string) => ({
  type: ADD_LINKED_EMAIL,
  email
});

export const deleteLinkedEmail = (email: string) => ({
  type: DELETE_LINKED_EMAIL,
  email
});

export const setPushNotifications = (pushNotificationsEnabled: boolean) => ({
  type: SET_PUSH_NOTIFICATIONS,
  pushNotificationsEnabled
});
