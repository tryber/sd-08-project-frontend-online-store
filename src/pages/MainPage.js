import React from 'react';
import ProductList from '../components/ProductList';
import ShoppingCartButton from '../components/ShoppingCartButton';
import { getProductsFromCategoryAndQuery } from '../services/api';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categoriesList: [],
      categoryID: '',
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

  getProductsAPI() {
    const { query, categoryID } = this.state;
    const getProducts = getProductsFromCategoryAndQuery(categoryID, query);
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
