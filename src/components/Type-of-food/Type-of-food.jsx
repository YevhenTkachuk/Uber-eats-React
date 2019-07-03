import React from 'react';
import './Type-of-food.css';

export function TypeOfFood(props) {
    return (
        <li    className="type-of-food"><a href={props.anchor}
               className="type-of-food__link">{props.type}</a>
        </li>
    )
}