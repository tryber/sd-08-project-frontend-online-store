import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

import CategoriesList from '../Components/Categories-list';
import Loading from '../Components/Loading';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      loading: true,
    };

    this.fetchCategory = this.fetchCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const categories = await api.getCategories();
    this.setState({ loading: false, categories });
  }

  render() {
    const { categories, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">carrinho</Link>
        <label data-testid="home-initial-message" htmlFor="input-search">
          <input type="text" id="input-search" />
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </label>
        <aside>
          <CategoriesList categories={ categories } />
        </aside>
      </div>
    );
  }
}

export default Home;
