import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';

class ProductList extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      queryInput: '',
      categoryInput: '',
      filteredProducts: [],
    };
  }

  handleChange(event) {
    this.setState({
      queryInput: event.target.value,
    });
  }

  async handleClick() {
    const { queryInput, categoryInput } = this.state;
    const searchResults = await
    api.getProductsFromCategoryAndQuery(categoryInput, queryInput);
    this.setState({
      filteredProducts: searchResults.results,
    });
  }

  render() {
    const { queryInput, filteredProducts } = this.state;
    return (
      <div>
        <label htmlFor="query-input">
          O que você procura:
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ queryInput }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Procurar
        </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <ul>
          <CategoryList />
        </ul>
        {filteredProducts.map(
          (product) => (<ProductCard
            title={ product.title }
            price={ product.price }
            imagePath={ product.thumbnail }
            key={ product.id }
          />),
        )}
        <Link data-testid="shopping-cart-button" to="/shoppingcart">Carrinho</Link>
      </div>
    );
  }
}

export default ProductList;
