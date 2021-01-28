import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
      value: '',
      category: '',
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

  async handleClick() {
    const { category, value } = this.state;
    const product = await (await api.getProductsFromCategoryAndQuery(category, value))
      .results;
    this.setState({
      products: product,
    });
    console.log(product);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div>
        <h1>Sales</h1>
        <label htmlFor="textInput" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
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
        <Link to="/cart" data-testid="shopping-cart-button">Ver carrinho</Link>
        {categories.map((c) => (
          <Link
            data-testid="category"
            key={ c.id }
            to={ `/${c.id}` }
          >
            { c.name }
          </Link>))}
        {products.map((product) => (
          <section key={ product.id } data-testid="product">
            <p>{product.title}</p>
            <img src={ `${product.thumbnail}` } alt={ product.title } />
            <p>{product.price}</p>
          </section>
        ))}
      </div>
    );
  }
}

export default Home;
