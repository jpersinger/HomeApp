import { Message } from "../../home_services/home_services.definitions";
import { ADD_MESSAGE, SET_AUTHENTICATED, SET_MESSAGES } from "../constants";

export const setAuthenticated = (isAuthenticated: boolean) => ({
  type: SET_AUTHENTICATED,
  isAuthenticated
});

export const setMessages = (messages: Message[]) => ({
  type: SET_MESSAGES,
  messages
});

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE,
  message
});
