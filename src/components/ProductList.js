import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as RequestAPI from '../services/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      query: '',
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { query } = this.state;
    this.fetchProducts(query);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ query: value });
  }

  handleClick() {
    const { query } = this.state;
    this.fetchProducts(query);
  }

  async fetchProducts(query) {
    try {
      const { results } = await RequestAPI.getProductsFromCategoryAndQuery('', query);
      this.setState({ products: results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div className="header">
        <SearchBar handleClick={ this.handleClick } handleChange={ this.handleChange } />
        {products.map((product) => (
          <Link
            to={ {
              pathname: `/product/${product.id}`,
              state: { productObj: product } } }
            data-testid="product-detail-link"
            key={ product.id }
          >
            <ProductCard
              product={ product }
            />
          </Link>))}
      </div>
    );
  }
}

export default ProductList;
