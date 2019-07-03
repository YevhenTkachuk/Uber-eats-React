import React from "react";
import basket from "../img/basketbasket.svg";
import "./Authorisation-cabinet.css";

export function Autorisations() {
  return (
    <div className="authorisation-cabinet">
      <button className="authorisation-cabinet__button">Sign In</button>
      <button className="authorisation-cabinet__button authorisation-cabinet__button_black">
        Register
      </button>
      <a
        href="https://www.ubereats.com/ru-UA/checkout/"
        className="authorisation-cabinet__image"
      >
        <img
          src={basket}
          alt="basket"
          className="authorisation-cabinet__image"
        />
      </a>
    </div>
  );
}
