import { render, screen } from "@testing-library/react";
import { it, describe, expect, beforeEach } from "vitest";
import Router from "../src/components/utils/Router";

describe("Router component", () => {
  beforeEach(() => {
    render(<Router />);
  });

  it("header renders", () => {
    const header = screen.getByRole("heading");
    expect(header.textContent).toBe("This is home content");
  });

  it("navigation renders", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("footer renders", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
