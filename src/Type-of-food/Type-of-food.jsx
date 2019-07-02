import React from 'react';
import './Type-of-food.css';

export function TypeOfFood(props) {
    return (
        <li><a href={props.anchor}
               className="type_food">{props.type}</a>
        </li>
    )
}