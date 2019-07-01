import React from "react";
import "./MainPage.css";
import { Search } from "../Search/Search.jsx";
import { RestaurantChoose } from "../restaurants-choose/Restaurants-choose.jsx";

export function MainPage() {
  return (
    <main className="main__wrapper">
      <Search />
      <p className="main__city">Kyiv Restaurants</p>
      <RestaurantChoose />
    </main>
  );
}
