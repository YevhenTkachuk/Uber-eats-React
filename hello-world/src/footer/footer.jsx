import React from 'react';
import './footer.css';
import logo from "./img/white-logologo2.svg";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <img src={logo} alt=""/>
            </div>
        </footer>
    );
}