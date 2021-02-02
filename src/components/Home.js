import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  busca() {
    return (
      <label htmlFor="busca" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          type="text"
          id="busca"
        />
      </label>
    );
  }

  botao() {
    return (
      <button
        type="button"
      >
        <Link data-testid="shopping-cart-button" to="/shoplist">Carrinho</Link>
      </button>
    );
  }

  render() {
    return (
      <form>
        {/* cria uma label e um input  e o botao */}
        { this.busca() }
        { this.botao() }
      </form>
    );
  }
}

export default Home;
