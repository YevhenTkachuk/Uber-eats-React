import React from "react";
import { Link } from "react-router-dom";

export function ProductCard(props) {
  return (
    <li className="product-card">
      <Link to="/" className="product-card__link">
        <div className="product-card__left">
          <span className="product-card__title">{props.title}</span>
          <span className="product-card__categories">{props.categories}</span>
          <span className="product-card__deliveryTime">
            {props.deliveryTime}
          </span>
          <img src={props.imageUrl} alt="" />
        </div>
      </Link>
    </li>
  );
}
