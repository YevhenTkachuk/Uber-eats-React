import React from "react";
import { Header } from "./header/Header.jsx";
import "./variables.css";
import "./MainPage/MainPage.css";
import { Footer } from "./footer/Footer.jsx";
import { MainPage } from "./MainPage/MainPage.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RestaurantPage } from "./RestaurantPage/RestaurantPage.jsx";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/restaurant" component={RestaurantPage} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
