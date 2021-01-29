import React, { Component } from 'react';

import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';
import ItemList from '../components/ItemList';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.handleCategories = this.handleCategories.bind(this);
    this.getItems = this.getItems.bind(this);
    this.state = {
      id: '',
      product: [],
    };
  }

  handleCategories({ target: { id } }) {
    this.setState({
      id,
    }, () => this.getItems());
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
        <Header />
        <CategoriesList onClick={ this.handleCategories } />
        <ItemList products={ product } />
      </div>
    );
  }
}
