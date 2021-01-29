import React, { Component } from 'react';

import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';
<<<<<<< HEAD

export default class Home extends Component {
  render() {
    return (
      <div className="busca">
        <Header />
        <CategoriesList />
=======
import ItemList from '../components/ItemList';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.handleCategories = this.handleCategories.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.getItems = this.getItems.bind(this);
    this.state = {
      id: '',
      product: [],
      query: '',
    };
  }

  handleCategories({ target: { id } }) {
    this.setState({
      id,
    }, () => this.getItems());
  }

  getQuery(value) {
    this.setState({
      query: value,
    });
  }

  async getItems() {
    const { id, query } = this.state;
    const searchResult = await getProductsFromCategoryAndQuery(id, query);
    this.setState({
      product: searchResult.results,
    });
    console.log(searchResult.results);
  }

  render() {
    const { product } = this.state;
    return (
      <div className="busca">
        <Header getQuery={ this.getQuery } getItems={ this.getItems } />
        <CategoriesList onClick={ this.handleCategories } />
        <ItemList products={ product } />
>>>>>>> d526e9b411828c3e55ec368c686ea00cbac25218
      </div>
    );
  }
}
