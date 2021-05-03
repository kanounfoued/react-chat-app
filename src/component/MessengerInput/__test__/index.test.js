import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MessengerInput from "../index";

test("Testing messenger input", () => {
  const props = {
    value: "kanoun",
    onChange: () => {},
    label: "Type here ...",
  };

  render(<MessengerInput {...props} />);
  screen.debug();

  expect(screen.getByTestId(/messenger-input-container/i)).toBeInTheDocument();

  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();

  userEvent.type(screen.getByRole("textbox"), props.value);

  //expect(screen.getByRole("textbox").value).toBe(props.value);
});
