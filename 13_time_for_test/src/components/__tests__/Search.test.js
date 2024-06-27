import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantCardsMock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should Search Res List for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  const resCards = screen.getAllByTestId("resCard");

  // Screen should load 8 cards
  expect(resCards.length).toBe(8);

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const newResCards = screen.getAllByTestId("resCard");

  // Screen should load 2 cards
  expect(newResCards.length).toBe(2);
});

it("should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedResBtn = screen.getByTestId("topRatedResBtn");
  const resCards = screen.getAllByTestId("resCard");

  // Screen should load 8 cards
  expect(resCards.length).toBe(8);

  fireEvent.click(topRatedResBtn);

  const newResCards = screen.getAllByTestId("resCard");

  // Screen should load 8 cards
  expect(newResCards.length).toBe(2);
});
