import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories }));
    // api.getCategories().then((categories) => console.log(categories));
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="home">
        <SearchBar />
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Carrinho</Link>
        <Categories categories={ categories } />
      </div>
    );
  }
}

export default Home;
