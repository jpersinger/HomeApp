import { sendGetRequest, sendPostRequest } from ".";
import { Message } from "../home_services/home_services.definitions";
import store from "../redux";
import { setMessages } from "../redux/actions/home";
import { MESSAGES_URL, SERVER_URL } from "./constants";

export const setMessagesInStore = () => {
  getMessages().then(messages => {
    store.dispatch(setMessages(messages));
  });
};

export const getId = (): Promise<string> => sendGetRequest<string>("/test");

const getMessages = (): Promise<Message[]> =>
  sendGetRequest<Message[]>(MESSAGES_URL);

export const sendNewMessage = (message: Message) => {
  sendPostRequest(SERVER_URL + MESSAGES_URL, JSON.stringify(message));
};
