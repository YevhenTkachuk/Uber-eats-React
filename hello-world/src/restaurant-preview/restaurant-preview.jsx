import React from 'react';
import './restaurant-preview.css';

export function RestaurantPreview(props) {
    return (<div className="restaurant-preview">
        <span className="restaurant-preview__name">{props.name}</span>
        <span className="restaurant-preview__dishes">{props.dishes}</span>
        <span className="restaurant-preview__time">{props.time}</span>
    </div>)
}