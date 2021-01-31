import React from 'react';
import { Link } from 'react-router-dom';
import * as mercadolibreAPI from '../services/api';
import ListCategories from '../components/ListCategories';
import Search from '../components/Search';
import ProductList from '../components/ProductList';
import cartPNG from '../cart.png';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: [],
    };
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickCategory(name, value) {
    const { category } = this.state;
    const { getProductsFromCategoryAndQuery } = mercadolibreAPI;
    this.setState({ category: [name, value] });
    getProductsFromCategoryAndQuery(...category).then((data) => console.log(data));
  }

  handleClick(query) {
    this.setState((state) => ({ ...state, query }));
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <ListCategories
          onClick={ this.handleClick }
        />
        <Search
          onClick={ this.handleClick }
        />
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          <img src={ cartPNG } alt="this is the link to the shopping bag" width="32px" />
        </Link>
        <ProductList products={ query } />
      </div>
    );
  }
}

export default Home;
