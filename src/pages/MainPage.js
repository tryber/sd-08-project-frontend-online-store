import React from 'react';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import ShoppingCartButton from '../components/ShoppingCartButton';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';

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
    this.getProductsAPI = this.getProductsAPI.bind(this);
    this.categoriesAPI = this.categoriesAPI.bind(this);
  }

  componentDidMount() {
    this.categoriesAPI();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => {
      if (target.name === 'categoryID') {
        this.getProductsAPI();
      }
    });
  }

  handleClick() {
    this.getProductsAPI();
  }

  async getProductsAPI() {
    const { query, categoryID } = this.state;
    console.log(categoryID);
    const getProducts = await getProductsFromCategoryAndQuery(categoryID, query);
    console.log(getProducts.results);
    this.setState({
      products: getProducts.results,
    });
  }

  async categoriesAPI() {
    const result = await getCategories();
    this.setState({
      categoriesList: result.map((categories) => categories),
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
    const { query, products, categoriesList, categoryID } = this.state;
    return (
      <div>
        { this.renderInputSearch() }
        <div>
          <ShoppingCartButton />
          <Categories categories={ categoriesList } onClick={ this.handleChange } />
        </div>
        <ProductList products={ products } query={ query } categoryID={ categoryID } />
      </div>
    );
  }
}

export default MainPage;
