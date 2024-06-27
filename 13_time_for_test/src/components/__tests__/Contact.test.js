import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../Contact";

describe("Contact Us Page Heading and Submit Load Test Cases", () => {
  test("should load Contact Us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
});

describe("Contact Us Page Input Load Test Cases", () => {
  test("Should load name input inside Contact component", () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText("name");

    expect(nameInput).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
