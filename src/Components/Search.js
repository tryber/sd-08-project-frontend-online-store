import React from 'react';

import { Link } from 'react-router-dom';

import * as api from '../services/api';

class Search extends React.Component {
  constructor() {
    super();

    this.renderSearchInput = this.renderSearchInput.bind(this);
    this.renderSearchbutton = this.renderSearchbutton.bind(this);
    this.fetchSearchApi = this.fetchSearchApi.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      query: '',
      categoryId: undefined,
      products: [],
    };
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  async fetchSearchApi() {
    const { categoryId, query } = this.state;
    const busca = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ products: busca.results });
  }

  renderSearchbutton() {
    return (
      <button
        data-testid="query-button"
        type="button"
        onClick={ this.fetchSearchApi }
      >
        Buscar
      </button>
    );
  }

  renderSearchInput() {
    return (
      <input data-testid="query-input" onChange={ this.handleChange } />
    );
  }

  renderSearchResults() {
    const { products } = this.state;

    if (products === undefined) {
      return (
        <span>Nenhum produto foi encontrado</span>
      );
    }
    return (
      products.map((product) => (
        <div key={ product.id } data-testid="product">
          <p>{ product.title }</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>
            R$:
            { product.price }
          </p>
          <Link
            to={ {
              pathname: `/${product.id}/detalhes`,
              state: { product },
            } }
            onClick={ this.handleChange }
            data-testid="product-detail-link"
          >
            Ver Detalhes
          </Link>
          <Link
            to={ {
              pathname: '/shoppingcart',
              state: { product },
            } }
            onClick={ this.handleChange }
            data-testid="product-add-to-cart"
          >
            Adcionar ao carrinho
          </Link>
        </div>
      ))
    );
  }

  render() {
    return (
      <div>
        { this.renderSearchInput() }
        { this.renderSearchbutton() }
        { this.renderSearchResults() }
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default Search;
