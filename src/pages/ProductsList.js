import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CategoryList, ListCard } from '../components';

import * as api from '../services/api';

class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
      categoryId: '',
      search: '',
      results: [],
      cart: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleChangeCategory(event) {
    this.setState({
      [event.target.name]: event.target.id,
    });

    await this.handleClick();
  }

  async handleClick() {
    const { categoryId, search } = this.state;

    await api.getProductsFromCategoryAndQuery(categoryId, search).then((data) => {
      this.setState({
        results: data.results,
      });
    });
  }

  handleAddItemToCart(item) {
    const { cart } = this.state;

    this.setState({
      cart: [...cart, item],
    });
  }

  render() {
    const { results } = this.state;

    return (
      <main>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Cart</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <br />
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
        <br />
        <CategoryList onClick={ this.handleChangeCategory } />
        {results
          .map((item) => (
            <ListCard
              key={ item.id }
              item={ item }
              cart={ cart }
              handleAddItemToCart={ this.handleAddItemToCart }
            />))}
      </main>
    );
  }
}

export default ProductsList;
