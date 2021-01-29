import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import './SearchPage.css';

class SearchPage extends Component {
  render() {
    getCategories().then((response) => console.log(response));
    return (
      <div className="searchPage-container">
        <ProductCard />
      </div>
    );
  }
}

export default SearchPage;
