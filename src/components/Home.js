import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import * as api from '../services/api';
import ListCategories from './ListCategories';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: '',
    };
    this.handleClickCategory = this.handleClickCategory.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => (
      this.setState({
        categories,
      })
    ));
  }

  handleClickCategory(name, value) {
    this.setState({ category: [name, value] });
    const { category } = this.state;
    console.log(category);
    api.getProductsFromCategoryAndQuery(...category).then((data) => console.log(data));
  }

  fetchApiFromCategory() {
    const { category } = this.state;
    console.log(category);
    api.getProductsFromCategoryAndQuery(...category).then((data) => console.log(data));
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
        <ListCategories onClick={ this.handleClickCategory } categoriesList={ categories } />
        <Search />
      </div>
    );
  }
}

export default Home;
