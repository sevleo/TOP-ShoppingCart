import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import App from "../src/App";

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header.textContent).toMatch(/Hello world!/i);
  });
});
