import React, { Component } from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((data) => this.setState({
        categories: data,
      }));
  }

  async handleClick({ target }) {
    const data = await api.getProductsFromCategoryAndQuery('', target.value);
    this.setState({
      products: data.results,
    });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div data-testid="category">
        Categorias:
        { categories.map(({ id, name }) => (
          <button
            type="button"
            data-testid="category"
            key={ id }
            value={ name }
            onClick={ this.handleClick }
          >
            { name }
          </button>))}
        { products.map((item) => <ProductCard key={ item.id } product={ item } />) }
      </div>
    );
  }
}

export default CategoriesList;
