import React, { Component } from 'react';
import * as RequestAPI from '../services/api';
import ProductCard from '../components/ProductCard';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };

    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts(query) {
    const { results } = await RequestAPI.getProductsFromCategoryAndQuery('', query);
    this.setState({ products: results });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="header">
        <input data-testid="query-input" type="text" className="input" />
        <button data-testid="query-button" type="button">Pesquisar</button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        {products.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
        />))}
      </div>
    );
  }
}

export default ProductList;
