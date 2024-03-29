import React from "react";
import "./Restaurant-teaser.css";
import { Data } from "../Data/Data";

export function RestaurantTeaser() {
  const background = `url(${Data.largeImageUrl})`;
  return (
    <div className="restaurant-teaser">
      <div className="restaurant-teaser__background"
           style={{ background: background, backgroundPosition: `center center` }}>

        <div className="restaurant-teaser__wrapper">
          <div className="restaurant-teaser__information">
            <span className="restaurant-teaser__title">{Data.title}</span>
            <div className="restaurant-teaser__footer">
            <span className="restaurant-teaser__price">{Data.priceBucket} • {Data.categories.map((category) => {
              return `${category.name}`;
            })}</span>
              <span className="restaurant-teaser__time">{Data.etaRange.min} - {Data.etaRange.max} Min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
