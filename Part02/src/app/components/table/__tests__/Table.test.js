import React from "react";
import Faker from "faker";

import { render } from "@testing-library/react";
import Table from "../Table";

test("renders table", () => {
  var users = [
    {
      name: "teste01",
      email: "teste01@gmail.com",
      createDate: "2019-07-31",
      changeDate: "2020-03-05",
      status: false,
      rules: `01`
    },
    {
      name: "teste02",
      email: "teste02@gmail.com",
      createDate: "2019-02-08",
      changeDate: "2020-05-03",
      status: true,
      rules: `02`
    }
  ];

  const container = render(<Table users={users} />);
  expect(container.container).toMatchSnapshot();
});
