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
    this.handleEnter = this.handleEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderLength = this.renderLength.bind(this);
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
        everyList: '',
      });
    });
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  async handleChangeCategory(event) {
    this.setState({
      [event.target.name]: event.target.id,
    });

    await this.handleClick();
  }

  renderLength() {
    const { cart } = this.props;
    return (
      <span data-testid="shopping-cart-size">
        (
        { cart.length }
        )
      </span>
    );
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
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          Cart
          {this.renderLength()}
        </Link>
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

        <CategoryList onClick={ this.handleChangeCategory } />

        {everyList !== ''
          ? everyList.map((item) => (
            <ProductCard
              key={ item.id }
              item={ item }
              list={ everyList }
              cart={ cart }
              handleAddItemToCart={ handleAddItemToCart }
            />))
          : results.map((item) => (
            <ProductCard
              key={ item.id }
              item={ item }
              list={ results }
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
