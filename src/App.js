import React from "react";
import { Header } from "./Header/Header.jsx";
import "./variables.css";
import "./Main-page/Main-page.css";
import { Footer } from "./Footer/Footer.jsx";
import { MainPage } from "./Main-page/Main-page.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RestaurantPage } from "./Restaurant-page/Restaurant-page.jsx";

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
