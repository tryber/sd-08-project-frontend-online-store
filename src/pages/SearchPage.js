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
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      products: [],
      category: '',
    };
  }

  handleCategorySelection(event) {
    const categoryName = event.target.name;
    this.setState(() => ({ category: categoryName }));
  }

  handleClick(event) {
    this.handleCategorySelection(event);
    this.requestProducts();
  };

  requestProducts(categ, query) {
    const { category } = this.state;
    this.setState(async () => {
      const results = category === ''
        ? await api.getProductsFromCategoryAndQuery('ALL', query)
        : await api.getProductsFromCategoryAndQuery(category, query);
      this.setState(() => ({ products: results.results }));
    });
  }

  render() {
    const { products, category } = this.state;
    return (
      <div>
        <SearchBar requestProducts={ this.requestProducts } category={ category } />
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
          <CategoryList onclick={ this.handleClick } />
        </div>
      </div>
    );
  }
}

export default SearchPage;
