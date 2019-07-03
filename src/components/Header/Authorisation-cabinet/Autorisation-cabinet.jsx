import React from "react";
import basket from "../img/basketbasket.svg";
import "./Authorisation-cabinet.css";

export function Autorisations() {
  return (
    <div className="authorisation-cabinet__wrapper">
      <button className="authorisation-cabinet">Sign In</button>
      <button className="authorisation-cabinet authorisation-cabinet--black">
        Register
      </button>
      <a
        href="https://www.ubereats.com/ru-UA/checkout/"
        className="authorisation-cabinet__basket"
      >
        <img
          src={basket}
          alt="basket"
          className="personal-area-bar__basket-image"
        />
      </a>
    </div>
  );
}
