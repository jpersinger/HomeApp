import produce from "immer";
import { Message } from "../../home_services/home_services.definitions";
import { sendNewMessage } from "../../server/home";
import { ADD_MESSAGE, SET_MESSAGES } from "../constants";

export interface HomeState {
  allMessages: Message[];
}

const initialState: HomeState = {
  allMessages: []
};

export default (state = initialState, action: any) =>
  produce(state, newState => {
    switch (action.type) {
      case SET_MESSAGES:
        newState.allMessages = action.messages;
        break;

      case ADD_MESSAGE:
        sendNewMessage(action.message);
        newState.allMessages.push(action.message);
        break;
    }
  });
