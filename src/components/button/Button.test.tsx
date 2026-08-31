import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { ReactNode } from "react";

import { Button } from "./Button";

function setup(para: ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(para),
  };
}

describe("Button", () => {
  test("Button exists", () => {
    setup(<Button name="btn" />);
    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
  });

  test("Button exists", () => {
    setup(<Button name="btn" />);
    const btn = screen.getByRole("button");
    const name = btn.textContent;

    expect(name).toBe("btn");
  });
});
