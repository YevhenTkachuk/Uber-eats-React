import React from "react";
import "./Main-page.css";
import { Search } from "../Search/Search.jsx";
import { RestaurantChoose } from "../Restaurants-choose/Restaurants-choose.jsx";

export function MainPage() {
  return (
    <main className="main-page">
      <Search />
      <p className="main-page__city">Kyiv Restaurants</p>
      <RestaurantChoose />
    </main>
  );
}
