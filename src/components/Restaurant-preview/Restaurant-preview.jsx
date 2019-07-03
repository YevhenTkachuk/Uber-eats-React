import React from "react";
import "./Restaurant-preview.css";

export function RestaurantPreview(props) {
  return (
    <div className="restaurant-preview">
      <img
        className="restaurant-preview__photo"
        src={props.imageUrl}
        alt="food_image"
      />
      <span className="restaurant-preview__title">{props.title}</span>
      <span className="restaurant-preview__category">
        {props.priceBucket}
        {props.categories.map(category => {
          return " • " + category.keyName;
        })}
      </span>
      <span className="restaurant-preview__time">
        {props.etaRange.min} - {props.etaRange.max} Min
      </span>
    </div>
  );
}
