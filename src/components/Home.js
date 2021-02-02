import React from 'react';
import ListAllCategories from './ListAllCategories';
import { getCategories } from '../services/api';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { categories: [] };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });

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
    const { categories } = this.state;
    return (
      <form>
        {/* cria uma label e um input  e o botao */}
        { this.busca() }
        { this.botao() }
        <ListAllCategories categories={ categories } />
      </form>
    );
  }
}

export default Home;
