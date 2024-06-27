import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/resMenuMock.json";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItem");

  expect(foodItems.length).toBe(20);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(22);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItem").length).toBe(20);
  expect(
    screen.getByText("Cart is empty! Add items to your cart!")
  ).toBeInTheDocument();
});
