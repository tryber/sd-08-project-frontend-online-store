import React from 'react';
import ProductCard from './ProductCard';
import * as api from '../services/api';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleClick() {
    const { search } = this.state;
    await api.getProductsFromCategoryAndQuery('', search)
      .then((data) => {
        this.setState({
          productList: data.results,
        });
      });
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            data-testid="query-input"
            type="text"
            name="search"
            placeholder="Encontre seu produto"
            onChange={ this.handleChange }
          />
        </h3>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          PESQUISAR
        </button>
        { productList.map((product) => (
          <ProductCard key={ product.id } product={ product } />))}
      </div>
    );
  }
}
