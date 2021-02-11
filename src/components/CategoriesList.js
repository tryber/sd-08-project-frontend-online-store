import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ListaCardProdutos from './ListaCardProdutos';

import * as api from '../services/api';
import './CategoriesList.css';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.createAllCategories = this.createAllCategories.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.fetchProducts = this.fetchProducts.bind(this);
    // this.handleClickCategory = this.handleClickCategory.bind(this);
  }

  componentDidMount() {
    const { handleClickCategory } = this.props;
    this.createAllCategories(handleClickCategory);
  }

  //   handleClick(e) {
  //     e.preventDefault();
  //   }

  async createAllCategories(handleClickCategory) {
    const itemList = await api.getCategories();
    const spanList = itemList.map((data) => (
      <button
        type="button"
        key={ data.id }
        id={ data.id }
        data-testid="category"
        onClick={ handleClickCategory }
        className="btn btn-default text-nowrap text-left"
      >
        { data.name }
      </button>));
    this.setState({ categories: spanList });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories-list">
        {categories}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  handleClickCategory: PropTypes.func.isRequired,
};

export default CategoriesList;
