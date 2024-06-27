import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

test("should render Restaurant Card component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("Pizza Hut");

  expect(restaurantName).toBeInTheDocument();
});
