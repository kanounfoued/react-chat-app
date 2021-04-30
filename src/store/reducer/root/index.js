import { combineReducers } from "redux";
import MainReducer from "../main";
import MessengerContact from "../messenger/contact";

const rootReducer = combineReducers({
  mainReducer: MainReducer,
  messengerContact: MessengerContact,
});

export default rootReducer;
