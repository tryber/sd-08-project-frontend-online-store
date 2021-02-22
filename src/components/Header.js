import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartQuantifier from './CartQuantifier';
import './Header.css';
import logo from '../logo.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { handleClick } = this.props;
    const { inputValue } = this.state;
    handleClick(inputValue);
  }

  onChange({ target: { value } }) {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { cartSize } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        <header className="header-body">
          <img src={ logo } alt="logo" />
          <Link
            className="header-link"
            to="/pages/shoppingcart"
            data-testid="shopping-cart-button"
          >
            Carrinho
            <CartQuantifier size={ cartSize } />
          </Link>
          <p className="header-p" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <section className="query-input-wrapper">
            <input
              placeholder="Buscar produtos, marcas e muito mais..."
              type="text"
              data-testid="query-input"
              value={ inputValue }
              onChange={ this.onChange }
            />
            <button type="button" data-testid="query-button" onClick={ this.onClick }>
              <i className="fas fa-search" />
            </button>
          </section>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
