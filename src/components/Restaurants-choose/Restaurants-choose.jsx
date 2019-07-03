import React from "react";
import "./Restaurants-choose.css";
import { RestaurantPreview } from "../Restaurant-preview/Restaurant-preview.jsx";
import { restaurants } from "./Restaurant-info.js";
import { Link } from "react-router-dom";

export function RestaurantChoose() {
  return (
    <div className="restaurants-choose__list">
      {restaurants.map((restaurant, i) => {
        return (
          <div className="restaurants-choose__wrapper" key={i}>
            <Link className="restaurants-choose" to="/restaurant">
              <RestaurantPreview
                title={restaurant.title}
                categories={restaurant.categories}
                priceBucket={restaurant.priceBucket}
                etaRange={restaurant.etaRange}
                imageUrl={restaurant.imageUrl}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
