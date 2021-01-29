import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
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
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <ul>
          {categories.map((cat) => (
            <li
              data-testid="category"
              key={ cat.name }
            >
              { cat.name }
            </li>))}
        </ul>
        <Search />
      </div>
    );
  }
}

export default Home;
