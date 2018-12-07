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
        const message: Message = action.message;
        // message.creator = state.googleUser.w3.ofa; TODO
        sendNewMessage(message);
        newState.allMessages.push(message);
        break;
    }
  });
