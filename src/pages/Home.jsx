import React, { Component } from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';
import CardProducts from './CardProducts';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      radioValue: '',
    };

    this.handleInputRadio = this.handleInputRadio.bind(this);
  }

  handleInputRadio({ target: { id } }) {
    this.setState({
      radioValue: id,
    });
    this.getProductsFromCategoryById(id);
  }

  async getProductsFromCategoryById(categoryId) {
    const response = await getProductsFromCategoryAndQuery(categoryId);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const { radioValue, products } = this.state;
    return (
      <div>
        <Header
          radioValue={ radioValue }
          products={ (Produtos) => { this.setState({ products: Produtos }); } }
        />
        <main className="main-container">
          <Categories
            handleInputRadio={ this.handleInputRadio }
          />
          <CardProducts products={ products } />
        </main>
      </div>
    );
  }
}

export default Home;
