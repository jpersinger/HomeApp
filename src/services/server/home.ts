import axios from "axios";
import { Message } from "../home_services/home_services.definitions";
import store from "../redux";
import { setMessages } from "../redux/actions/home";
import { MESSAGES_URL, SERVER_URL } from "./constants";

export const setMessagesInStore = () => {
  getMessages().then(messages => {
    store.dispatch(setMessages(messages));
  });

  getId().then(id => {
    console.log(id);
  });
};

const getId = (): Promise<string> =>
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + "/test")
      .then(data => {
        resolve(data.data);
      })
      .catch(err => {
        reject(err);
      });
  });

const getMessages = (): Promise<Message[]> =>
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + MESSAGES_URL)
      .then(data => {
        resolve(data.data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendNewMessage = (message: Message) => {
  console.log("sending", message);
  axios.post(SERVER_URL + MESSAGES_URL, JSON.stringify(message), {
    headers: { "Content-Type": "application/json" }
  });
};
