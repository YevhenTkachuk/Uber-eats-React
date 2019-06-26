import React from 'react';
import './header.css';
import  './order-info/order-info.css';
import {Autorisations} from "./authorization_cabinet/autorisation";
import {OrderInfo} from "./order-info/order-info";

export function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo--wrapper">
                    <a className="header__logo" href="https://www.ubereats.com/uk-UA/">
                    </a>
                </div>
               <OrderInfo/>
               <Autorisations/>
            </div>
        </header>
);
}
