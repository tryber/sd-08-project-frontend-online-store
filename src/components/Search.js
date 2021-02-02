import React, { Component } from 'react';
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
    const results = await getProductsFromCategoryAndQuery('', valor);
    this.setState({ results });
  }

  botaoBusca() {
    const { valor } = this.props;
    this.searchCategories(valor);
  }

  corpoDeTudo(results) {
    return (
      <div data-testid="product">
        { results.map((card) => (
          <section key={ card.id }>
            <p>{ card.title }</p>
            <span>{ card.price }</span>
            <img src={ card.thumbnail } alt="imagem eletrônico" />
          </section>
        )) }
      </div>
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
          : <p>Nenhum produto encontrado</p> }
      </div>
    );
  }
}

export default Search;
