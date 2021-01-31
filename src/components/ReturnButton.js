import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReturnButoon extends Component {
  render() {
    return (
      <Link to="/" data-testid="shopping-cart-ReturnButoon">
        <img
          src="https://static.thenounproject.com/png/890784-200.png"
          alt="botao de retorno para home"
          width="80px"
        />
      </Link>
    );
  }
}

export default ReturnButoon;
