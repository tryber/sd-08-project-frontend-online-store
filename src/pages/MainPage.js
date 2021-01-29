import React from 'react';
import Categories from '../components/Categories';
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
    this.getProductsAPI = this.getProductsAPI.bind(this);
    this.categoriesAPI = this.categoriesAPI.bind(this);
  }

  componentDidMount() {
    this.categoriesAPI();
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

  async categoriesAPI() {
    const result = await getCategories();
    this.setState({
      categories: result.map((categories) => categories.name),
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
          <Categories />
        </div>
        { this.renderInputSearch() }
        <ProductList products={ products } query={ query } />
      </div>
    );
  }
}

export default MainPage;
