import produce from "immer";
import {
  GoogleUser,
  Message
} from "../../home_services/home_services.definitions";
import { sendNewMessage } from "../../server/home";
import { ADD_MESSAGE, AUTHENTICATE_USER, SET_MESSAGES } from "../constants";

export interface HomeState {
  isAuthenticated: boolean;
  googleUser: GoogleUser;
  allMessages: Message[];
}

const initialState: HomeState = {
  isAuthenticated: false,
  googleUser: {
    w3: {
      U3: "",
      ig: "",
      ofa: "",
      wea: ""
    }
  },
  allMessages: []
};

export default (state = initialState, action: any) =>
  produce(state, newState => {
    switch (action.type) {
      case AUTHENTICATE_USER:
        newState.isAuthenticated = true;
        newState.googleUser = action.googleUser;
        break;

      case SET_MESSAGES:
        newState.allMessages = action.messages;
        break;

      case ADD_MESSAGE:
        const message: Message = action.message;
        message.creator = state.googleUser.w3.ofa;
        sendNewMessage(message);
        newState.allMessages.push(message);
        break;
    }
  });
