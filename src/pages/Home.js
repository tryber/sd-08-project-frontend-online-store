import React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../services/api';

import CategoryList from '../components/CategoryList';
import ProductsList from '../components/ProductsList';

import './home.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
      value: '',
      category: '',
      // filter: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => (
      this.setState({
        categories,
      })
    ));
  }

  async handleClick() {
    const { category, value } = this.state;
    const product = await (await api.getProductsFromCategoryAndQuery(category, value))
      .results;
    this.setState({
      products: product,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'button' ? target.innerText : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div>
        <h1>Sales</h1>
        <label htmlFor="textInput" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <br />
          <input
            onChange={ this.handleChange }
            name="value"
            data-testid="query-input"
            id="textInput"
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar

        </button>
        <br />
        <Link to="/cart" data-testid="shopping-cart-button">Ver carrinho</Link>

        <CategoryList
          list={ categories }
          filterProducts={ this.handleChange }
          onClick={ () => {
            // this.handleChange();
            this.handleClick();
          } }
        />
        <ProductsList list={ products } />
      </div>
    );
  }
}

export default Home;
