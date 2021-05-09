import * as React from "react";
import { screen, render, fireEvent, findByRole } from "@testing-library/react";
import MessengerContactItem from "../index";
import userEvent from "@testing-library/user-event";
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

// need to add another test for onHover effect on the item.
test("Testing MessengerContactItem component, onHover", async () => {
  const props = {
    contact: {
      id: "sufnknvxlqs",
      name: "amine",
      familyName: "samrani",
      picture: image3,
    },
  };
  render(<MessengerContactItem {...props} />);

  fireEvent.mouseOver(screen.getByTestId("tooltip-contact-item"));

  const tooltip = await findByRole(document.body, "tooltip");
  console.log(tooltip);
  expect(tooltip).toBeInTheDocument();
  expect(tooltip.textContent).toBe(
    `${props.contact.name} ${props.contact.familyName}`
  );
});
