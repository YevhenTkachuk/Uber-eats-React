import React from 'react';
import {Header} from "../header/header.jsx";
import {Footer} from "../footer/footer.jsx";
import {MainPage} from "../main/main.jsx";
import '../main/main.css';
import '../variables.css';


export function RestaurantPage(){
    return (
        <div>
            <Header/>
           <MainPage/>
            <Footer/>
        </div>
    );
}