import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';

export default class ListaCategorias extends Component {
  constructor() {
    super();
    this.fetchListOfCategories = this.fetchListOfCategories.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchListOfCategories();
  }

  async fetchListOfCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    const { onChangeCategoryId } = this.props;
    return (
      <div className="container-list-categories">
        {categories.map((category) => (
          <label
            data-testid="category"
            htmlFor="input-label-list-categories"
            className="label-list-categories"
            key={ category.id }
            value={ category.name }
          >
            { category.name }
            <input
              id="input-label-list-categories"
              value={ category.id }
              name="category"
              // z
              type="radio"
              onClick={ onChangeCategoryId }
            />
          </label>
        ))}
      </div>
    );
  }
}

ListaCategorias.propTypes = {
  onChangeCategoryId: PropTypes.func.isRequired,
};
