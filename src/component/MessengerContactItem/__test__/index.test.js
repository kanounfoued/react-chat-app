import * as React from "react";
import { screen, render } from "@testing-library/react";
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

  screen.debug();

  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByText(/amine samrani/i)).toBeInTheDocument();
});

// need to add another test for onHover effect on the item.
