import * as React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import Sider from "../index";
import store from "../../../store";

test("Testing Sider component, In OPEN state", () => {
  const props = {
    open: true,
    handleDrawerClose: () => {},
  };
  render(
    <Provider store={store}>
      <Sider {...props} />
    </Provider>
  );

  const sider = screen.getByTestId("sider-bar");
  expect(sider).toBeInTheDocument();
  expect(sider).toHaveStyle("width: 300px");

  const toolbar = screen.getByTestId("toolbar");
  expect(within(toolbar).getByRole("button")).toBeInTheDocument();
});

test("Testing Sider component, In CLOSE state", () => {
  const props = {
    open: false,
    handleDrawerClose: () => {},
  };

  render(
    <Provider store={store}>
      <Sider {...props} />
    </Provider>
  );

  const sider = screen.getByTestId("sider-bar");
  expect(sider).toBeInTheDocument();
  expect(sider).toHaveStyle("width: 73px;");
});
