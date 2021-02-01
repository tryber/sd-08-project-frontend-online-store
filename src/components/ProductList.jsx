import React from 'react';

import Category from './Category';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      category: undefined,
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

  handleQueryClick() {
    const { category, query } = this.state;
    console.log(query);
    this.fetchProducts(api.getProductsFromCategoryAndQuery(category, query));
  }

  handleCategoryClick(event) {
    this.setState({
      category: event,
    }, () => {
      const { category, query } = this.state;
      this.fetchProducts(api.getProductsFromCategoryAndQuery(category, query));
    });
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
        onClick={ () => { this.handleQueryClick(); } }
        data-testid="query-button"
      >
        Pesquisar
      </button>
    );
  }

  renderQueryResult(search) {
    if (search.results.length === 0) return <h3>Nenhum produto foi encontrado</h3>;

    return (
      <ul className="product-list">
        {search.results.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
        />))}
      </ul>
    );
  }

  render() {
    const { products, loading, loadingMessage } = this.state;

    return (
      <section>
        <div className="search-container">
          {this.renderQueryInput()}
          {this.renderQueryButton()}
        </div>
        <section className="products-container">
          <Category onClick={ this.handleCategoryClick } />
          <div className="search-result">
            {
              loading ? <h3>{ loadingMessage }</h3> : this.renderQueryResult(products)
            }
          </div>
        </section>
      </section>
    );
  }
}

export default ProductList;
