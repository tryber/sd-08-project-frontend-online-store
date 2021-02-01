import React from 'react';
import PropTypes from 'prop-types';
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

  async handleClick({ target }) {
    const { value } = this.state;
    const newCategory = target.id;
    const product = await (await api.getProductsFromCategoryAndQuery(newCategory, value))
      .results;
    this.setState({ products: product });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { categories, products } = this.state;
    const { productToCart, productCart, productNumber } = this.props;
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
        <Link
          to={ { pathname: '/cart', state: { productCart, productNumber } } }
          data-testid="shopping-cart-button"
        >
          Ver carrinho

        </Link>

        <CategoryList
          list={ categories }
          filterProducts={ this.handleChange }
          onClick={ this.handleClick }
        />
        <ProductsList
          list={ products }
          productToCart={ productToCart }
        />
      </div>
    );
  }
}

Home.propTypes = {
  productToCart: PropTypes.func.isRequired,
  productCart: PropTypes.arrayOf(String).isRequired,
  productNumber: PropTypes.number.isRequired,
};

export default Home;
