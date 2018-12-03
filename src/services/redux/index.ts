import { createStore } from "redux";
import ServerHandler from "../server/serverHandler";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
ServerHandler.intialize();

export default store;
