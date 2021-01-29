import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ListCard extends Component() {
  async QueryList() {
    getProductsFromCategoryAndQuery(this.props)
      .then((data) => {
        console.log(data.results);
        data.results.map((result) => (
          <div key={ result.id }>
            <p>{result.title}</p>
            <img src={ result.thumbnail } alt={ result.title } />
            <p>
              R$
              {result.price}
            </p>
          </div>));
      }).catch((error) => (console.log(error)));
  }

  render() {
    return (
      <section>
        {this.QueryList}
      </section>
    );
  }
}

export default ListCard;
