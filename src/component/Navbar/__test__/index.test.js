import * as React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../index";

test("Testing Navbar rendering while sider bar is open.", () => {
  const props = {
    open: false,
    handleDrawerOpen: () => {},
  };

  render(<Navbar {...props} />);

  expect(
    screen.getByRole("button", { name: /open drawer/i })
  ).toBeInTheDocument();

  expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
});

test("Testing Close Navbar rendering while the sider is close.", () => {
  const props = {
    open: true,
    handleDrawerOpen: () => {},
  };

  render(<Navbar {...props} />);

  expect(
    screen.queryByRole("button", { name: /open drawer/i })
  ).not.toBeInTheDocument();

  expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
});
