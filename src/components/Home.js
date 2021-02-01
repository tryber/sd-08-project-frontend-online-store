import React, { Component } from 'react';
import ListCards from './ListCards';
import ShoppingCartIcon from './ShoppingCartIcon';
import { getProductsFromCategoryAndQuery } from '../services/api';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      object: [1],
      categories: [],
    };
    this.findCategories = this.findCategories.bind(this);
    this.searchCategories = this.searchCategories.bind(this);
    this.listUpdate = this.listUpdate.bind(this);
    this.CardMount = this.CardMount.bind(this);
  }

  componentDidMount() {
    this.findCategories();
  }

  async listUpdate(newValue) {
    const objectquery = await getProductsFromCategoryAndQuery(newValue);
    await this.setState({ object: objectquery.results });
  }

  CardMount() {
    const { object } = this.state;
    if (object[0] === 1) {
      return (
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      );
    }
    if (object.length === 0) {
      return <h2> Nenhum produto foi encontrado </h2>;
    }
    return object.map((item) => (<ListCards
      key={ item.id }
      productprop={ item }
    />));
  }

  async findCategories() {
    const categoriesFromApi = await api.getCategories();
    this.setState({
      categories: categoriesFromApi,
    });
  }

  async searchCategories(categorie) {
    const listCatego = await api.getProductsFromCategoryAndQuery('', categorie);
    await this.setState({ object: listCatego.results });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <header className="header">
          <div>
            <input
              data-testid="query-input"
              type="text"
              className="searchbar"
            />
            <button
              type="submit"
              className="btn"
              data-testid="query-button"
              onClick={ () => {
                const searchWord = document.querySelector('.searchbar').value;
                this.listUpdate(searchWord);
              } }
            >
              Buscar
            </button>
          </div>
          <ShoppingCartIcon />
        </header>
        <div className="container">
          <ul className="categorylist">
            {categories.map((item) => (
              <button
                type="submit"
                data-testid="category"
                key={ item.id }
                onClick={ () => this.searchCategories(item.id) }
              >
                {item.name}
              </button>
            ))}
          </ul>
          <section className="CardListContainer">
            {this.CardMount()}
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
