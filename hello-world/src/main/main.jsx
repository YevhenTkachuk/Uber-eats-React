import React from 'react';
import './main.css';
import {Search} from "../search/search.jsx";
import {RestaurantChoose} from "../restaurants-choose/restaurants-choose.jsx";




export function MainPage(){
    return (
        <main className="main__wrapper">
            <Search/>
            <p className="main__city">Kyiv Restaurants</p>
            <RestaurantChoose/>
        </main>
    );
}
