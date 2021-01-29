import React from 'react';

import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      category: '',
      loading: true,
      loadingMessage: '',
      products: undefined,
      query: '',
    };

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
  }

  handleQueryChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  // verificar função quando mais funcionalidades forem implementadas
  handleQueryClick() {
    const { category, query } = this.state;
    this.fetchProducts(api.getProductsFromCategoryAndQuery(category, query));
  }

  //  função temporária, vai depender de outros elementos
  handleCategoryClick(event) {
    const { category, query } = this.state;
    if (event.target.className === '') {
      this.setState({
        category: event.target.innerText,
      });
    }
    this.fetchProducts(api.getProductsFromCategoryAndQuery(category, query));
  }

  fetchProducts(result) {
    this.setState(
      { loading: true,
        loadingMessage: 'Carregando...',
      },
      async () => {
        this.setState({
          products: await result,
          loading: false,
        });
      },
    );
  }

  renderQueryResult(query) {
    if (query.results.length === 0) return <h3>Nenhum produto foi encontrado</h3>;

    return (
      <ul>
        {query.results.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
        />))}
      </ul>
    );
  }

  renderQueryInput() {
    const { query } = this.state;
    return (
      <label htmlFor="query-input">
        <input
          data-testid="query-input"
          id="query-input"
          name="query-input"
          onChange={ this.handleQueryChange }
          type="text"
          value={ query }
        />
      </label>
    );
  }

  renderQueryButton() {
    return (
      <button
        type="button"
        onClick={ () => { this.handleQueryClick()} }
        data-testid="query-button"
      >
        Pesquisar
      </button>
    );
  }

  render() {
    const { products, loading, loadingMessage } = this.state;

    return (
      <section>
        {this.renderQueryInput()}
        {this.renderQueryButton()}
        <div>
          {
            loading ? loadingMessage : this.renderQueryResult(products)
          }
        </div>
      </section>
    );
  }
}

export default ProductList;
