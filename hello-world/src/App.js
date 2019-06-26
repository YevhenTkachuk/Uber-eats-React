import React from 'react';
import {Header} from "./header/header.jsx"
import './variables.css';
import './main/main.css';
import {Footer} from "./footer/footer.jsx";
import {MainPage} from "./main/main.jsx";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {RestaurantPage} from "./RestaurantPage/restaurant.jsx";


function App() {
    return (
        <div>
            <Header/>
            <Router>
                <Route path="/"
                       exact
                       component={MainPage}/>
                <Route path="/restaurant"
                       component={RestaurantPage}/>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
