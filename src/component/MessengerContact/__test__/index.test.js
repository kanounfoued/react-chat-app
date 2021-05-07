import * as React from "react";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import MessengerContact from "../index";
// import store from "../../../store";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

test("Testing MessengerContact component", () => {
  const props = {
    isSiderOpen: true,
  };

  render(
    <Provider
      store={createStore(
        () => ({
          messengerContact: {
            contacts: [],
          },
        }),
        middleware
      )}
    >
      <MessengerContact {...props} />
    </Provider>
  );

  expect(screen.getByTestId(/no-contact-icon/i)).toBeInTheDocument();
  expect(screen.getByText(/no contacts/i)).toBeInTheDocument();
});
