import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import * as api from '../services/api';
import './SearchPage.css';

class SearchPage extends Component {
  constructor() {
    super();
    this.requestProducts = this.requestProducts.bind(this);
    this.handleCategorySelection = this.handleCategorySelection.bind(this);
    this.state = {
      products: [],
      category: '',
    };
  }

  handleCategorySelection(event) {
    this.setState(() => ({ category: event.target.name }));
  }

  requestProducts(category, query) {
    this.setState(async (previous) => {
      const results = previous.category === ''
        ? await api.getProductsFromCategoryAndQuery('ALL', query)
        : await api.getProductsFromCategoryAndQuery(category, query);
      this.setState({ products: results.results });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <SearchBar requestProducts={ this.requestProducts } />
        <div className="searchPage-container">
          {products.map((product) => (
            <ProductCard
              key={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              price={ `R$ ${product.price}` }
            />
          ))}
          {!products.length && <p>Nenhum produto foi encontrado</p>}
          <CategoryList />
        </div>
      </div>
    );
  }
}

export default SearchPage;
