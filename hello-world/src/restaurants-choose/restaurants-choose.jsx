import React from 'react';
import './restaurants-choose.css';
import MCDonald from './img/MCdonalds.png';
import {RestaurantPreview} from "../restaurant-preview/restaurant-preview.jsx";
import {Link} from "react-router-dom";

const restaurants = [
    {
        name: 'Макдональдс',
        dishes: '₴₴ • Бургеры',
        time: '25-35min',
    },
    {
        name: 'Mimosa Brooklyn Pizza',
        dishes: '₴₴₴ • Італійська • Піцца • Американська',
        time: '15 - 25 Min',
    },
    {
        name: 'Musafir',
        dishes: '₴₴₴ • Близькосхідна',
        time: '25 - 35 Min',
    },
    {
        name: 'WOKWAY',
        dishes: '₴₴₴ • Китайська • Азіатська',
        time: '35 - 40 Min',
    },
    {
        name: 'Макдональдс',
        dishes: '₴₴ • Бургеры',
        time: '25-35min',
    },
    {
        name: 'Макдональдс',
        dishes: '₴₴ • Бургеры',
        time: '25-35min',
    }

];

export function RestaurantChoose() {
    return (
        <div className="restaurants-choose__list">
            {restaurants.map(({name, dishes, time}, i) => {
                return (

                    <div className="restaurants-choose__wrapper" key={i}>
                        <Link  className="restaurants-choose" to="/restaurants">
                            <div className="restaurants-choose__header">
                                <img src={MCDonald} className="restaurants-choose__photo"/>
                            </div>

                            <RestaurantPreview
                                name={name}
                                dishes={dishes}
                                time={time}
                            />
                        </Link>
                    </div>

                )
            })}
        </div>
    )
}