import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import ListAllCategories from './ListAllCategories';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      busca: '',
      categories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  busca(busca) {
    return (
      <div>
        <label htmlFor="busca" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            id="busca"
          />
        </label>
        <Search valor={ busca } />
      </div>
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
    const { categories, busca  } = this.state;
    return (
      <form>
        {/* cria uma label e um input  e o botao */}
        { this.busca(busca) }
        { this.botao() }
        <ListAllCategories categories={ categories } />
      </form>
    );
  }
}

export default Home;
