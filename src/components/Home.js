import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      // value: '',
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => console.log(categories));
  }

  render() {
    return (
      <div>
        <h1>Sales</h1>
        <label htmlFor="textInput" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="textInput" />
        </label>
        <Link to="/cart" data-testid="shopping-cart-button">Ver carrinho</Link>
      </div>
    );
  }
}

export default Home;
