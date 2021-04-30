import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/root";

const middleware = applyMiddleware(thunk);

// create the store
const store = createStore(rootReducer, middleware);
export default store;
