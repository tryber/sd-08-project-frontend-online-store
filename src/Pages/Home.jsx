import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

import CategoriesList from '../Components/Categories-list';
import ProductList from '../Components/Product-list';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      query: '',
      listProduct: [],
      clicked: false,
    };

    this.fetchCategory = this.fetchCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ query: value });
  }

  async clickHandle() {
    const { query } = this.state;
    const listProduct = await api.getProductsFromCategoryAndQuery('', query);
    this.setState({ listProduct, clicked: true });
  }

  async fetchCategory() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories, listProduct, clicked } = this.state;
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">carrinho</Link>
        <form>
          <label data-testid="home-initial-message" htmlFor="input-search">
            <input
              data-testid="query-input"
              type="text"
              id="input-search"
              onChange={ this.handleChange }
            />
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </label>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.clickHandle }
          >
            Pesquisar
          </button>
        </form>
        <aside>
          <CategoriesList categories={ categories } />
        </aside>
        <main>
          <ProductList
            listProduct={ listProduct }
            clicked={ clicked }
          />
        </main>
      </div>
    );
  }
}

export default Home;
