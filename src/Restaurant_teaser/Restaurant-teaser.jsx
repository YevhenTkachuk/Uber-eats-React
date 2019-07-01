import React from "react";
import "./Restaurant-teaser.css";

export function RestaurantTeaser() {
  return (
    <div className="restaurant-teaser__background">
      <div className="restaurant-teaser__wrapper">
        <div className="restaurant-teaser">
          <span className="restaurant-teaser__title">Трактир «Пушкин»</span>
          <div className="restaurant-teaser__footer">
            <span className="restaurant-teaser__price">₴₴₴ • Европейская</span>
            <span className="restaurant-teaser__time">40-50 Min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
