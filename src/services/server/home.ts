import { sendGetRequest, sendPostRequest } from ".";
import { Message } from "../home_services/home_services.definitions";
import store from "../redux";
import { setMessages } from "../redux/actions/home";
import { BIBLE_URL, MESSAGES_URL, SERVER_URL } from "./constants";

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

export const getRandomBibleVerse = async (): Promise<{
  chapter: string;
  verse: string;
}> => {
  const newVerse = await sendGetRequest<string>(BIBLE_URL);
  const div = document.createElement("div");
  div.innerHTML = newVerse;
  const bolded = div.getElementsByTagName("b")[0];
  const chapter = bolded.innerHTML || bolded.innerText || "";
  const clean = div.textContent || div.innerText || "";
  const verse = clean.split(chapter)[1].trim();
  return Promise.resolve({ chapter, verse });
};
