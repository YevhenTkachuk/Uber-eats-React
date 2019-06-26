import React from 'react';
import './search.css'

export function Search() {
    return (
        <div className="search__wrapper ">
            <label className="search__label">
                <input type="text" className="search__input" placeholder="Search for restaurant or cuisine"/>
            </label>
        </div>
    )
}