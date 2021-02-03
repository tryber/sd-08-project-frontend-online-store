import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Logo from '../images/Cat.png';
import * as api from '../services/api';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };

    this.getProdutsByQuery = this.getProdutsByQuery.bind(this);
    this.onSearchText = this.onSearchText.bind(this);
  }

  onSearchText({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async getProdutsByQuery() {
    const { query } = this.state;
    const { radioValue } = this.props;
    const result = await api.getProductsFromCategoryAndQuery(radioValue, query);
    const { products } = this.props;
    products(result.results);
  }

  render() {
    const { query } = this.state;
    return (
      <header>
        <Link to="/">
          <div className="logo-container">
            <img className="logo" src={ Logo } alt="" />
            <h2>Black Cat</h2>
          </div>
        </Link>
        <SearchBar
          query={ query }
          onClick={ this.getProdutsByQuery }
          onChange={ this.onSearchText }
        />
        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          <img
            className="cart-icon"
            src="https://image.flaticon.com/icons/png/512/2404/2404120.png"
            alt="Imagem do carrinho"
          />
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  products: PropTypes.func,
  radioValue: PropTypes.string,
};

Header.defaultProps = {
  radioValue: '',
  products: () => {},
};

export default Header;
