import React from "react";
import "./Restaurant-page.css";
import "../variables.css";
import ".//Restaurant-page.css";
import { RestaurantTeaser } from "../Restaurant-teaser/Restaurant-teaser";
import "../Main-page/Main-page.css";
import { RestaurantMenu } from "../Restaurant-menu/Restaurant-menu.jsx";
import { MenuType } from "../Menu-type/Menu-type";
import '../Menu-type/Menu-type.css';

export function RestaurantPage() {
  return (
    <>
      <RestaurantTeaser />
      <RestaurantMenu />
      <MenuType/>
    </>
  );
}
