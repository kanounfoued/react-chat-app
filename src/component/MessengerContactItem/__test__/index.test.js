import * as React from "react";
import {
  screen,
  render,
  fireEvent,
  waitForElementToBeRemoved,
  findByRole,
} from "@testing-library/react";
import MessengerContactItem from "../index";
import image3 from "../../../assets/contact/3.jpg";

test("Testing MessengerContactItem component", () => {
  const props = {
    contact: {
      id: "sufnknvxlqs",
      name: "amine",
      familyName: "samrani",
      picture: image3,
    },
  };
  render(<MessengerContactItem {...props} />);

  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByText(/amine samrani/i)).toBeInTheDocument();
});

test("Testing MessengerContactItem component, onMouseOver/onMouseOut", async () => {
  const props = {
    contact: {
      id: "sufnknvxlqs",
      name: "amine",
      familyName: "samrani",
      picture: image3,
    },
  };
  render(<MessengerContactItem {...props} />);

  // test onMouseOver event
  fireEvent.mouseOver(screen.getByTestId("tooltip-contact-item"));

  const tooltip = await findByRole(document.body, "tooltip");

  expect(tooltip).toBeInTheDocument();
  expect(tooltip.textContent).toBe(
    `${props.contact.name} ${props.contact.familyName}`
  );

  // test onMouseOut event
  fireEvent.mouseOut(screen.getByTestId("tooltip-contact-item"));
  await waitForElementToBeRemoved(() => screen.queryByRole("tooltip"));
  expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
});
