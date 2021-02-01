import React, { Component } from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import Categories from './CategoriesList';
import ShopButton from './ShopButton';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      query: '',
      cartProduct: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  async handleSearch() {
    const { query } = this.state;
    const fetch = await api.getProductsFromCategoryAndQuery('', query);
    this.setState({ product: fetch.results });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick({ target }) {
    const data = await api.getProductsFromCategoryAndQuery(target.key, target.value);
    this.setState({
      product: data.results,
    });
  }

  addCart(product) {
    const { cartProduct } = this.state;
    this.setState({ cartProduct: [...cartProduct, product] });
  }

  renderAviso() {
    return (
      <h3 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>);
  }

  render() {
    const { query, product, cartProduct } = this.state;
    return (
      <section>
        <label htmlFor="input">
          Search:
          <input
            onChange={ this.handleChange }
            data-testid="query-input"
            type="text"
            name="query"
            value={ query }
          />
        </label>
        <button
          onClick={ this.handleSearch }
          type="button"
          data-testid="query-button"
        >
          Button
        </button>
        <ShopButton cartProduct={ cartProduct } />
        <Categories onClick={ this.handleClick } />
        {product.length < 1
          ? this.renderAviso()
          : product.map((item) => <ProductCard onClick={ this.addCart } key={ item.id } product={ item } />)}
      </section>
    );
  }
}

export default SearchBar;
