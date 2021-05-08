import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let middleware = null;

beforeAll(() => {
  middleware = applyMiddleware(thunk);
});

function store_mock(children, state) {
  return render(
    <Provider store={createStore(() => state, middleware)}>{children}</Provider>
  );
}

export default store_mock;
