import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";

import { Nav } from "./Nav";

function setup(para: ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(para),
  };
}

describe("Nav", () => {
  test("Nav exists", () => {
    setup(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
  });

  test("Nav render correctly", () => {
    setup(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    const nav = screen.getByRole("list");

    expect(nav.childElementCount).toBe(3);
  });
});
