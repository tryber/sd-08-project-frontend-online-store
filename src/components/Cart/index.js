import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import { TiArrowBack } from 'react-icons/ti';

class Cart extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <button type="button" className="cart-goback" onClick={ history.goBack }>
          <TiArrowBack className="cart-goback-icon" />
          Voltar
        </button>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

Cart.propTypes = {
  history: PropTypes.arrayOf().isRequired,
};

export default Cart;
