import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Listagem extends Component {
  render() {
    return (
      <div>
        <label htmlFor="busca" data-testid="home-initial-message">
          <input type="text" id="busca" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Link to="/carrinho" data-testid="shopping-cart-button"><img alt="carrinho" src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" /></Link>
      </div>
    );
  }
}

export default Listagem;
