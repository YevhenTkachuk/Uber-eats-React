import React from "react";
import "./Order-info.css";

export function OrderInfo() {
  return (
    <div className="order-info">
      <div className="order-info__wrapper">
        <button className="order-info__time" type="button">
          ASAP
        </button>
        <span className="order-info__span">to</span>
        <label className="order-info__label">
          <input
            type="text"
            className="order-info__input"
            placeholder="ul. Tarasivska St, 16"
          />
        </label>
      </div>
    </div>
  );
}
