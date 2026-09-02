import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";

import { Home } from "./Home";

function setup(para: ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(para),
  };
}

describe("Home", () => {
  test("H1 exists", () => {
    setup(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const heading = screen.getByRole("heading", { level: 1 }).textContent;

    expect(heading).toBe("Welcome to our online store");
  });

  test("Image render correctly", () => {
    setup(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const Img = screen.getByAltText("Man pushing a cart");

    expect(Img).toBeInTheDocument();
  });
});
