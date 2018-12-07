import { Message } from "../../home_services/home_services.definitions";
import { ADD_MESSAGE, SET_MESSAGES } from "../constants";

export const setMessages = (messages: Message[]) => ({
  type: SET_MESSAGES,
  messages
});

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE,
  message
});
