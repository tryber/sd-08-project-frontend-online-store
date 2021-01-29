import React, { Component } from 'react';
import ListCards from './ListCards';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      object: [],
    };

    this.listUpdate = this.listUpdate.bind(this);
  }

  async listUpdate(newValue) {
    const objectquery = await getProductsFromCategoryAndQuery(newValue);
    await this.setState({ object: objectquery.results });
    console.log(this.state);
  }

  render() {
    const { object } = this.state;
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
        <section>
          {
            object.map((item) => (<ListCards
              key={ item.id }
              prop={ item }
            />))
          }
        </section>
      </div>
    );
  }
}

export default Home;
