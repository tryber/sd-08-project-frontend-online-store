import React from 'react';
import ProductList from '../components/ProductList';
import ShoppingCartButton from '../components/ShoppingCartButton';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    this.getProducts();
  }

  async getProducts() {
    const { query } = this.state;
    const getProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((response) => response.json());
    this.setState({
      products: getProducts.results,
    });
  }

  renderInputSearch() {
    return (
      <section>
        <label htmlFor="input-text" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            id="input-text"
            onChange={ this.handleChange }
            name="query"
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          Buscar
        </button>
      </section>
    );
  }

  render() {
    const { query, products } = this.state;
    return (
      <div>
        <div>
          <ShoppingCartButton />
        </div>
        { this.renderInputSearch() }
        <ProductList products={ products } query={ query } />
      </div>
    );
  }
}

export default MainPage;
