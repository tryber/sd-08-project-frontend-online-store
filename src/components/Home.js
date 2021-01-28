import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => (
      this.setState({
        categories,
      })
    ));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h1>Sales</h1>
        <label htmlFor="textInput" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="textInput" />
        </label>
        <Link to="/cart" data-testid="shopping-cart-button">Ver carrinho</Link>
        <ul>
          {categories.map((c) => (
            <li
              data-testid="category"
              key={ c.name }
            >
              { c.name }
            </li>))}
        </ul>
      </div>
    );
  }
}

export default Home;
