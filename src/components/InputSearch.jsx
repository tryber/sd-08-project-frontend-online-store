import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import ShoppingCart from '../shopping-cart.png';

class InputSearch extends React.Component {
  render() {
    const { query, onChange, onClick, cartSize } = this.props;
    return (
      <header>
        <input
          name="query"
          type="text"
          data-testid="query-input"
          id="search-input"
          value={ query }
          onChange={ onChange }
        />

        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>

        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img
            className="shopping-cart-icon"
            src={ ShoppingCart }
            alt="icon shopping cart"
          />
          <span
            className="cart-quantity"
            data-testid="shopping-cart-size"
          >
            { cartSize }
          </span>
        </Link>
      </header>
    );
  }
}

export default InputSearch;

InputSearch.propTypes = {
  query: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  cartSize: propTypes.number.isRequired,
};
