import * as React from "react";
import { screen } from "@testing-library/react";
import MessengerContact from "../index";
import store_mock from "../../../utils/store-mock";
import image3 from "../../../assets/contact/3.jpg";

test("Testing MessengerContact component for empty list of contacts", () => {
  const props = {
    isSiderOpen: true,
  };

  store_mock(<MessengerContact {...props} />, {
    messengerContact: {
      contacts: [],
    },
  });

  expect(screen.getByTestId(/no-contact-icon/i)).toBeInTheDocument();
  expect(screen.getByText(/no contacts/i)).toBeInTheDocument();
});

test("Testing MessengerContact component for non empty list of contacts", () => {
  const props = {
    isSiderOpen: true,
  };

  const contacts = [
    {
      id: "sufnknvxlqs",
      name: "amine",
      familyName: "samrani",
      picture: image3,
    },
  ];

  store_mock(<MessengerContact {...props} />, {
    messengerContact: {
      contacts,
    },
  });

  const list_of_contacts = screen.getByTestId(/list-of-contacts/i);
  expect(list_of_contacts).toBeInTheDocument();
  expect(list_of_contacts.children.length).toBe(1);
});
