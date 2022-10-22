import { render, screen } from "@testing-library/react";
import Navbar from "../../App";

describe("Navbar Component", () => {
  test("Must start with the logo of Pokemon", () => {
    render(<Navbar />);

    const logoPokemon = screen.getByTestId("pokemon-logo");

    expect(logoPokemon).toBeInTheDocument();
  });

  test("Must start with seach input", () => {
    render(<Navbar />);

    const searchInput = screen.getByTestId("search-input");

    expect(searchInput).toBeInTheDocument();
  });

  test("Must start with Favorite Option on Menu", () => {
    render(<Navbar />);

    const myFavorites = screen.getByText("My Favorites");

    expect(myFavorites).toBeInTheDocument();
  });
});
