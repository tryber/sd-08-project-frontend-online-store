import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import '../styles/headerStyle.css';
import Logo from '../images/Cat.png';
import * as api from '../services/api';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      categoryId: '',
      query: '',
    };

    this.getProdutsByQuery = this.getProdutsByQuery.bind(this);
  }

  async getProdutsByQuery() {
    const { categoryId, query } = this.state;
    const result = await api.getProductsFromCategoryAndQuery(categoryId, query);
    const { products } = this.props;
    products(result.results);
  }

  render() {
    const { query } = this.state;
    return (
      <header>
        <img className="logo" src={ Logo } alt="" />
        <SearchBar
          query={ query }
          onClick={ this.getProdutsByQuery }
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
  products: PropTypes.string.isRequired,
};

export default Header;
