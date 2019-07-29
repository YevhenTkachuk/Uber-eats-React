import React from "react";
import "./Main-page.css";
import { Search } from "../Search/Search.jsx";
import { RestaurantPreview } from "../Restaurant-preview/Restaurant-preview.jsx";
import { restaurants } from "./Restaurant-info.js";
import { Link } from "react-router-dom";


export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    };
  }


  updateSearchValue = searchValue => {
    this.setState({
      searchValue: searchValue
    });
  };


  searchInCategories(restaurant) {
    for (let i = 0; i < restaurant.categories.length; i++) {
      if (
        restaurant.categories[i].uuid
          .toLowerCase()
          .includes(this.state.searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    const title = "Kyiv Restararunt";

    return (
      <main className="main-page">
        <Search onSearchChange={this.updateSearchValue}/>
        <p className="main-page__city">{title}</p>
        <div className="main-page__wrapper">
          {restaurants
            .filter(restaurant =>
              restaurant.title
                .toLowerCase()
                .includes(this.state.searchValue) ||
              this.searchInCategories(restaurant))
            .map((restaurant, i) => {
              return (
                <div className="main-page__choose" key={i}>
                  <Link className="main-page__link" to="/restaurant">
                    <RestaurantPreview restaurant={restaurant}
                                       title={restaurant.title}
                                       categories={restaurant.categories}
                                       priceBucket={restaurant.priceBucket}
                                       etaRange={restaurant.etaRange}
                                       imageUrl={restaurant.imageUrl}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </main>
    );
  }
}
