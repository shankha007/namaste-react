import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg rounded-lg p-2">
      <div className="flex justify-between p-2">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      <ItemList items={data.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
