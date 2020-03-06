import React from "react";
import { render } from "@testing-library/react";
import Table from "../Table";

test("renders table", () => {
  const container = render(<Table users={[]} />);
  expect(container.container).toMatchSnapshot();
});
