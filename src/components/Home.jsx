import React from 'react';

import Category from './Category';
import ProductCard from './ProductCard';
import ShoppingCartLink from './ShoppingCartLink';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      category: undefined,
      loading: true,
      loadingMessage: '',
      products: undefined,
      query: '',
    };

    this.addProductToCart = this.addProductToCart.bind(this);
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

  addProductToCart(id) {
    const { products } = this.state;
    const newProduct = products.results.find((result) => result.id === id);
    newProduct.quantity = 1;
    newProduct.totalPrice = newProduct.price * newProduct.quantity;
    this.setState((previousState) => ({
      cart: [...previousState.cart, newProduct],
    }));
  }

  renderQueryInput() {
    const { query } = this.state;
    return (
      <input
        data-testid="query-input"
        onChange={ this.handleQueryChange }
        type="text"
        value={ query }
      />
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
    const { cart, products } = this.state;

    if (search.results.length === 0) return <h3>Nenhum produto foi encontrado</h3>;

    return (
      <ul className="product-list">
        {search.results.map((product) => (<ProductCard
          key={ `${product.id}` }
          product={ product }
          onClick={ this.addProductToCart }
          cart={ cart }
          products={ products }
        />))}
      </ul>
    );
  }

  render() {
    const { products, loading, loadingMessage, cart } = this.state;

    return (
      <section>

        <header className="header-container">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div className="cart-container">
            <ShoppingCartLink cart={ cart } length={ cart.length } />
          </div>
        </header>

        <section className="search-container">
          {this.renderQueryInput()}
          {this.renderQueryButton()}
        </section>

        <section className="main-container">
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
