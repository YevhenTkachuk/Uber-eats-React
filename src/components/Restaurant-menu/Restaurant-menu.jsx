import React from 'react';
import './Restaurant-menu.css';
import {Data} from "../Data/Data";
import {TypeOfFood} from "../Type-of-food/Type-of-food.jsx";

export function RestaurantMenu() {
    return (
        <nav className="restaurant-menu">
            <div className="restaurant-menu__wrapper">
                <ul className="restaurant-menu__type">
                    {Data.sections.map((section, j) => {
                        return <TypeOfFood key={j} anchor={`#${section.title}`} type={section.title} />
                    })}
                </ul>
            </div>
        </nav>
    )

}