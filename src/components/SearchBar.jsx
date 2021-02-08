import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
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
      <h3 className="col-12 productPageMargin text-center" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>);
  }

  render() {
    const { query, product, cartProduct } = this.state;
    return (
      <div>
        <Navbar
          expand="none"
          className="bg-warning shadow d-flex position-fixed w-100 z-index-topper"
        >
          <div className="d-flex justify-content-start">
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
              className="btn btn-light ml-3"
              onClick={ this.handleSearch }
              type="button"
              data-testid="query-button"
            >
              Search
            </button>
          </div>
          <div>
            <ShopButton cartProduct={ cartProduct } />
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-5" />
            <Navbar.Collapse>
              <Categories onClick={ this.handleClick } />
            </Navbar.Collapse>
          </div>
        </Navbar>
        <div className="row">
          {product.length < 1
            ? this.renderAviso()
            : product.map((item) => (
              <ProductCard
                click={ this.addCart }
                key={ item.id }
                product={ item }
              />))}
        </div>

      </div>
    );
  }
}

export default SearchBar;
