import React, { Component } from 'react';
import ListCards from './ListCards';
import ShoppingCartIcon from './ShoppingCartIcon';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from './CategoryList';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      object: [1],
    };

    this.listUpdate = this.listUpdate.bind(this);
    this.CardMount = this.CardMount.bind(this);
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

  render() {
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
        <section className="container">
          <ul className="categorylist">
            <CategoryList />
          </ul>
          <section className="CardListContainer">
            {this.CardMount()}
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
