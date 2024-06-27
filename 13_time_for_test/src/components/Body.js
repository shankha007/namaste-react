import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  const OpenRestaurantCard = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connectivity.
      </h1>
    );
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            data-testid="searchInput"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            data-testid="topRatedResBtn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName: </label>
          <input
            className="ml-2 p-2 border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      {!listOfRestaurants || listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {filteredRestaurants.map((resItem) => (
            <Link
              key={resItem.info.id}
              to={"/restaurants/" + resItem.info.id}
              className="body-restaurants"
            >
              {resItem.info.isOpen ? (
                <OpenRestaurantCard resData={resItem} />
              ) : (
                <RestaurantCard resData={resItem} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
