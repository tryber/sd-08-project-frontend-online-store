import React from 'react';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductList from '../components/ProductList';
import InputSearch from '../components/InputSearch';
import * as api from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoryId: '',
      productList: [],
      search: '',
    };
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCategoryToState = this.setCategoryToState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleClick() {
    const { search, categoryId } = this.state;

    await api.getProductsFromCategoryAndQuery(categoryId, search)
      .then((data) => {
        this.setState({
          productList: data.results,
        });
      });
  }

  async handleClickCategory(categoryId) {
    await this.setCategoryToState(categoryId);
    await this.handleClick();
  }

  async setCategoryToState(categoryId) {
    this.setState({
      categoryId,
    });
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        <header><InputSearch /></header>
        <aside><CategoriesFilter handleClick={ this.handleClickCategory } /></aside>
        <main>
          <ProductList
            handleClick={ this.handleClick }
            handleChange={ this.handleChange }
            productList={ productList }
          />
        </main>
      </div>
    );
  }
}
