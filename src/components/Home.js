import React from 'react';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.handleInputValue = this.handleInputValue.bind(this);
    this.listProducts = this.listProducts.bind(this);

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

  async listProducts() {
    const { input } = this.state;
    const response = await api.getProductsFromCategoryAndQuery('', input);
    const products = response.results;
    this.setState({
      products,
    });
  }

  render() {
    const { input, products } = this.state;

    return (
      <section className="Home">
        <input
          type="text"
          value={ input }
          data-testid="query-input"
          placeholder="Categoria ou produto..."
          onChange={ this.handleInputValue }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.listProducts }
        >
          Buscar
        </button>
        {products.map((item) => (
          <div key={ item.id } data-testid="product">
            <p>{ item.title }</p>
            <img src={ item.thumbnail } alt={ item.title } />
            <span>{ item.price }</span>
          </div>
        ))}
      </section>
    );
  }
}

export default Home;
