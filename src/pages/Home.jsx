import React, { Component } from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';
import CardProducts from './CardProducts';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Header products={ (Produtos) => { this.setState({ products: Produtos }); } } />
        <Categories />
        <CardProducts products={ products } />
      </div>
    );
  }
}

export default Home;
