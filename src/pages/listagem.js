import React, { Component } from 'react';

class Listagem extends Component {
  render() {
    return (
      <div>
        <label htmlFor="busca" data-testid="home-initial-message">
          <input type="text" id="busca" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <a href="carrinho.jsx"><img src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" alt="carrinho" width="50" height="50" data-testid="shopping-cart-button" /></a>
      </div>
    );
  }
}

export default Listagem;
