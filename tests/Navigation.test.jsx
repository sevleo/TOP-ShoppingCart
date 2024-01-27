import { render, screen } from "@testing-library/react";
import { it, describe, expect, beforeEach } from "vitest";
import Navigation from "../src/components/sections/Navigation";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

const setShowCart = vi.fn();
let showCart = false;

describe("Navigation component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navigation showCart={showCart} setShowCart={setShowCart} />
      </MemoryRouter>
    );
  });

  it("logo renders", () => {
    const header = screen.getByText("NuevaShop");
    expect(header).toBeInTheDocument();
  });

  it("buttons render", () => {
    const homeButton = screen.getByRole("link", { name: "Home" });
    const collectionsButton = screen.getByRole("link", { name: "Collections" });
    const cartButton = screen.getByText("shopping_cart");
    expect(homeButton).toBeInTheDocument();
    expect(collectionsButton).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });
});
