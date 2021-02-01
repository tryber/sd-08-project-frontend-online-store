import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import FetchCategories from './FetchCategories';

class SearchProducts extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputValue = this.handleInputValue.bind(this);
    this.inputTest = this.inputTest.bind(this);
    this.buttonTest = this.buttonTest.bind(this);
    this.getProducts = this.getProducts.bind(this);

    this.state = {
      input: '',
      products: [],
    };
  }

  handleInputValue({ target }) {
    this.setState({
      input: target.value,
    });
  }

  async getProducts({ target }) {
    const categoryId = target.value;
    const { input } = this.state;
    const response = (categoryId)
      ? await api.getProductsFromCategoryAndQuery(categoryId, '')
      : await api.getProductsFromCategoryAndQuery('', input);
    const products = response.results;
    this.setState({
      products,
      input: '',
    });
  }

  inputTest() {
    const { input } = this.state;

    return (
      <input
        type="text"
        value={ input }
        data-testid="query-input"
        placeholder="Categoria ou produto..."
        onChange={ this.handleInputValue }
      />
    );
  }

  buttonTest() {
    return (
      <button
        type="button"
        data-testid="query-button"
        onClick={ this.getProducts }
      >
        Buscar
      </button>
    );
  }

  render() {
    const { products } = this.state;

    return (
      <section className="Home">
        { this.inputTest() }
        { this.buttonTest() }
        <FetchCategories callback={ this.getProducts } />
        {products.map((item) => (
          <div key={ item.id } data-testid="product">
            <p>{ item.title }</p>
            <img src={ item.thumbnail } alt={ item.title } />
            <span>
              { `${item.price} ${item.currency_id} ` }
              <Link
                data-testid="product-detail-link"
                to={ `/${item.category_id}-${item.id}` }
              >
                Saiba Mais
              </Link>
            </span>
          </div>
        ))}
      </section>
    );
  }
}

export default SearchProducts;
