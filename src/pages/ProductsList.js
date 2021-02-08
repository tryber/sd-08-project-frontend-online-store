import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CategoryList, ProductCard } from '../components';

import * as api from '../services/api';

class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      results: [],
      everyList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    this.renderList();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleClick() {
    const { search } = this.state;

    await api.getProductsFromCategoryAndQuery(search, search).then((data) => {
      this.setState({
        results: data.results,
      });
    });
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  async renderList() {
    await api.getProductsFromCategoryAndQuery().then((data) => {
      this.setState({
        everyList: data.results,
      });
    });
  }

  render() {
    const { results, everyList } = this.state;
    const { cart, handleAddItemToCart } = this.props;

    return (
      <main>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Cart</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <input
          data-testid="query-input"
          name="search"
          onChange={ this.handleChange }
          type="text"
        />

        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          PESQUISAR
        </button>

        <CategoryList />

        {everyList !== ''
          ? everyList.map((item) => (
            <ProductCard
              key={ item.id }
              item={ item }
              cart={ cart }
              handleAddItemToCart={ handleAddItemToCart }
            />)) : ''}

        {results
          .map((item) => (
            <ProductCard
              key={ item.id }
              item={ item }
              cart={ cart }
              handleAddItemToCart={ handleAddItemToCart }
            />))}
      </main>
    );
  }
}

ProductsList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
};

export default ProductsList;
