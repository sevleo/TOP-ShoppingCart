import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Router from "../src/components/utils/Router";

describe("Router component", () => {
  it("renders without crashing", () => {
    render(<Router />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header.textContent).toMatch(/This is home content/i);
  });
});
