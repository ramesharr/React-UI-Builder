import React from "react";
import { mount } from "enzyme";
import Root from "./Root";
import App from "./App";

import Navbar from "./components/navbar";
import { Appcontainer } from "./components/appContainer";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("shows the navbar", () => {
  expect(wrapped.find(Navbar).length).toEqual(1);
});

it("shows the app container", () => {
  expect(wrapped.find(Appcontainer).length).toEqual(1);
});
