import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReturnButoon extends Component {
  render() {
    return (
      <Link to="/" data-testid="shopping-cart-ReturnButoon">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuMDI2IDIyLjk1N2MxMC45NTctMTEuNDIxLTIuMzI2LTIwLjg2NS0xMC4zODQtMTMuMzA5bDIuNDY0IDIuMzUyaC05LjEwNnYtOC45NDdsMi4yMzIgMi4yMjljMTQuNzk0LTEzLjIwMyAzMS41MSA3LjA1MSAxNC43OTQgMTcuNjc1eiIvPjwvc3ZnPg=="
          alt="botao de retorno para home"
          width="80px"
        />
      </Link>
    );
  }
}

export default ReturnButoon;
