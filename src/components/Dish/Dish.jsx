import React from 'react';
import './Dish.css';
import '../variables.css'
export function Dish(props) {
    const {title, itemDescription, price, imageUrl} = props.dish;
    let prices = price / 100;

    return (
        <div className="dish">
            <a href="javascript:void(0)" className="dish__basket">
                <div className="dish__content">
                    <span className="dish__title">{title}</span>
                    {itemDescription  ? <span className="dish__options">{itemDescription}</span> : null}
                    <span className="dish__price">${prices} ₴</span>
                </div>
                {imageUrl  ? <img src={imageUrl} alt="" className="dish__photo-preview"/> : null}
            </a>
        </div>
    )
}