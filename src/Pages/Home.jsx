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

    this.fetchCategories = this.fetchCategories.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
    this.clickCategory = this.clickCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  inputChange({ target }) {
    const { value } = target;
    this.setState({ query: value });
  }

  async clickSearch() {
    const { query } = this.state;
    const listProduct = await api.getProductsFromCategoryAndQuery('', query);
    this.setState({ listProduct, clicked: true });
  }

  async clickCategory(id) {
    const listProduct = await api.getProductsFromCategoryAndQuery(id, '');
    this.setState({ listProduct, clicked: true });
  }

  async fetchCategories() {
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
              onChange={ this.inputChange }
            />
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </label>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.clickSearch }
          >
            Pesquisar
          </button>
        </form>
        <aside>
          <CategoriesList
            categories={ categories }
            clickCategory={ this.clickCategory }
          />
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
