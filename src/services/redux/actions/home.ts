import {
  GoogleUser,
  Message
} from "../../home_services/home_services.definitions";
import { ADD_MESSAGE, AUTHENTICATE_USER, SET_MESSAGES } from "../constants";

export const authenticateUser = (googleUser: GoogleUser) => ({
  type: AUTHENTICATE_USER,
  googleUser
});

export const setMessages = (messages: Message[]) => ({
  type: SET_MESSAGES,
  messages
});

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE,
  message
});
