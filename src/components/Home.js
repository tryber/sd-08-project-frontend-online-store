import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from './Search';
import ListAllCategories from './ListAllCategories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import SearchByCategory from './SearchByCategory';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      busca: '',
      categories: [],
      resultadoCategoria: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.pesquisarCategoria = this.pesquisarCategoria.bind(this);
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

  async pesquisarCategoria(idCategoria) {
    const resultadoCategoria = await getProductsFromCategoryAndQuery(idCategoria, '');
    const { results } = resultadoCategoria;
    this.setState({ resultadoCategoria: results });
  }

  busca(busca) {
    return (
      <div>
        <label htmlFor="busca" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            id="busca"
            name="busca"
            data-testid="query-input"
            onChange={ this.handleChange }
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
    const { addAoCarrinho } = this.props;
    const { categories, busca, resultadoCategoria } = this.state;
    return (
      <form>
        {/* cria uma label e um input  e o botao */}
        { this.busca(busca) }
        { this.botao() }
        <ListAllCategories
          pesquisarCategoria={ this.pesquisarCategoria }
          categories={ categories }
        />
        <SearchByCategory
          addAoCarrinho={ addAoCarrinho }
          produtos={ resultadoCategoria }
        />
      </form>
    );
  }
}

Home.propTypes = {
  addAoCarrinho: PropTypes.func.isRequired,
};

export default Home;
