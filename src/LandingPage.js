import React from 'react';
import { Link } from 'react-router-dom';
import * as api from './services/api';

class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      categoryId: '',
      query: '',
      productList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCategoriesList = this.getCategoriesList.bind(this);
    this.getProductsFromAPI = this.getProductsFromAPI.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  handleChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  async getCategoriesList() {
    const listCategories = await api.getCategories();
    this.setState({
      categoriesList: listCategories,
    });
  }

  async getProductsFromAPI(categoryId, query) {
    const apiResponse = await api.getProductsFromCategoryAndQuery(categoryId, query);
    const productList = await apiResponse.results;
    console.log(apiResponse);
    this.setState({
      productList,
    });
  }

  render() {
    const { categoriesList, categoryId, query, productList } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.getProductsFromAPI(categoryId, query) }
        >
          Pesquisar
        </button>
        <input
          type="text"
          data-testid="query-input"
          value={ query }
          onChange={ this.handleChange }
        />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <div>
          {
            categoriesList
              .map((category) => (
                <div key={ category.id } data-testid="category">
                  { category.name }
                </div>))
          }
        </div>
        <div>
          { productList.map((product) => (
            <div key={ product.id } data-testid="product">
              <p>{ product.title }</p>
              <p>
                R$
                { product.price }
              </p>
              <img src={ product.thumbnail } alt={ product.title } />
            </div>
          )) }
        </div>
      </div>
    );
  }
}

export default LandingPage;
