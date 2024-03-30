import React, { useState } from "react";

import RestaurantCard from "./RestaurantCard";

import resList from "../utils/restaurants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((resItem) => (
          <RestaurantCard key={resItem.info.id} resData={resItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
