import React from "react";

import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
