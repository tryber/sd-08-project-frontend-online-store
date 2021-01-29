import React from 'react';
import * as api from '../services/api';
import FetchCategories from './FetchCategories';
import Lista from './Lista';

class Home extends React.Component {
  constructor() {
    super();

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

  initialMessage() {
    return (
      <h2
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
  }

  render() {
    const { products } = this.state;

    return (
      <section className="Home">
        { this.inputTest() }
        { this.buttonTest() }

        {products.map((item) => (
          <div key={ item.id } data-testid="product">
            <p>{ item.title }</p>
            <img src={ item.thumbnail } alt={ item.title } />
            <span>{ item.price }</span>
          </div>
        ))}

        { this.initialMessage() }
        <FetchCategories callback={ this.getProducts } />
        <Lista />
      </section>
    );
  }
}

export default Home;
