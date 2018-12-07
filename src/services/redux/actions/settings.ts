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

export const authenticateUser = (googleUser: GoogleUser) => ({
  type: AUTHENTICATE_USER,
  googleUser
});

export const setUserData = (user: UserData) => ({
  type: SET_USER_DATA,
  user
});

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
