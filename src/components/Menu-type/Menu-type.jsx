import React from 'react';
import {Data} from "../Data/Data";
import './Menu-type.css';
import {Dish} from "../Dish/Dish.jsx";
import "../Dish/Dish.css";

export function MenuType() {
    return (
        <div className="menu-type">
            <div className="menu-type__wrapper">
                {Data.sections.map((section, i) => {
                    return (
                        <div className="menu-type__section-menu" key={i} >
                            <p className="menu-type__name" id={section.title}>{section.title}</p>
                            <div className="menu-type__dishes" >
                                {section.itemUuids.map((item) => {
                                    return <Dish
                                                 dish={Data.items[item]}
                                                />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}