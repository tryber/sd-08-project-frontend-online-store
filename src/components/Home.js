import React, { Component } from 'react';
import ListCards from './ListCards';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
    console.log(this.state);
  }

  CardMount() {
    const { object } = this.state;
    if (object[0] === 1) {
      return <h2> Digite algum termo de pesquisa ou escolha uma categoria. </h2>;
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
        <input
          data-testid="query-input"
          type="text"
          className="searchbar"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ () => {
            const searchWord = document.querySelector('.searchbar').value;
            this.listUpdate(searchWord);
          } }
        >
          Buscar
        </button>
        <section className="CardListContainer">
          {this.CardMount()}
        </section>
      </div>
    );
  }
}

export default Home;
