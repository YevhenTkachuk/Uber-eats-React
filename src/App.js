import React from "react";
import { Header } from "./components/Header/Header.jsx";
import "./components/variables.css";
import "./components/Main-page/Main-page.css";
import { Footer } from "./components/Footer/Footer.jsx";
import { MainPage } from "./components/Main-page/Main-page.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RestaurantPage } from "./components/Restaurant-page/Restaurant-page.jsx";
import ScrollToTop from "./components/scrollTop.jsx";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <ScrollToTop>
          <Route path="/" exact component={MainPage} />
          <Route path="/restaurant" component={RestaurantPage} />
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
