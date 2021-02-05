import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
    this.searchCategories = this.searchCategories.bind(this);
    this.botaoBusca = this.botaoBusca.bind(this);
  }

  async searchCategories(valor) {
    const query = await getProductsFromCategoryAndQuery('', valor);
    const { results } = query;
    this.setState({ results });
  }

  botaoBusca() {
    const { valor } = this.props;
    this.searchCategories(valor);
  }

  corpoDeTudo(result) {
    const results = Array.from(result);
    return (
      <ul>
        {
          results.map((card) => (
            <li key={ card.id } data-testid="product">
              <p>{ card.title }</p>
              <span>{ card.price }</span>
              <img src={ card.thumbnail } alt="imagem eletrônico" />
            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={ this.botaoBusca }
          data-testid="query-button"
        >
          Busca
        </button>
        { results ? this.corpoDeTudo(results)
          : <p>Nenhum produto foi encontrado</p> }
      </div>
    );
  }
}

Search.propTypes = {
  valor: PropTypes.string.isRequired,
};

export default Search;
