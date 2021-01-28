import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as apiConsult from '../services/api';
import ListaCardProdutos from '../components/LIstaCardProdutos';
import * as api from '../services/api';

class Listagem extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.createAllCategories = this.createAllCategories.bind(this);
  }

  componentDidMount() {
    this.createAllCategories();
  }

  async createAllCategories() {
    const itemList = await apiConsult.getCategories();
    const spanList = itemList.map((data) => (
      <li
        key={ data.id }
        data-testid="category"
      >
        { data.name }
      </li>));
    this.setState({ categories: spanList });
  }

  render() {
    const { categories } = this.state;
    this.state = {
      listOfProducts: [],
      query: undefined,
      category: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleClick() {
    try {
      const { category, query } = this.state;
      const produtos = await api.getProductsFromCategoryAndQuery(category, query)
        .then((data) => data.results);
      const produtosx = produtos.map((prod) => (
        { id: prod.id,
          title: prod.title,
          thumbnail: prod.thumbnail,
          price: prod.price,
        }));
      this.setState({
        listOfProducts: produtosx,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { listOfProducts } = this.state;
    return (
      <div className="main">
        <div className="categorias">
          <ul>
            {categories}
          </ul>
        </div>
        <label htmlFor="busca" data-testid="home-initial-message">
          <input
            type="text"
            name="query"
            onChange={ this.handleChange }
            id="busca"
            data-testid="query-input"
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button
          className="query-button"
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <Link to="/carrinho" data-testid="shopping-cart-button"><img alt="carrinho" src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" /></Link>
        <div>
          <ListaCardProdutos listOfProducts={ listOfProducts } />
        </div>
      </div>
    );
  }
}

export default Listagem;
