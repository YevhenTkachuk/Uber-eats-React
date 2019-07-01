import React from "react";
import "./RestaurantPage.css";
import "../variables.css";
import "../RestaurantPage/RestaurantPage.css";
import { RestaurantTeaser } from "../Restaurant_teaser/Restaurant-teaser";
import { restaurantMenus } from "./restaurantMenuInfo";
import "../restaurants-choose/Restaurants-choose.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { RestaurantMenu } from "../RestaurantMenu/RestaurantMenu";

export function RestaurantPage() {
  return (
    <>
      <RestaurantTeaser />
      <RestaurantMenu />
      <div className="restaurantPage__wrapper">
        <div className="restaurantPage">
          <span className="restaurantPage__title">Закуски</span>
          <ul className="restaurantPage__list">
            {restaurantMenus.map((restaurantMenus, i) => {
              return (
                <ProductCard
                  key={i}
                  title={restaurantMenus.title}
                  categories={restaurantMenus.categories}
                  deliveryTime={restaurantMenus.deliveryTime}
                  imageUrl={restaurantMenus.imageUrl}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
