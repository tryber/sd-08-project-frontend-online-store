import React, { Component } from 'react';
import propTypes from 'prop-types';

import * as api from '../services/api';

export default class CategoriesList extends Component {
  constructor() {
    super();

    this.state = {
      list: [{ id: 0, name: "" }]};
    this.callCategories = this.callCategories.bind(this);
  }

  componentDidMount() {
    this.callCategories();
  }

  async callCategories() {
    const list = await api.getCategories();
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        Categorias de Produtos:
        {list.map(({ id, name }) => (
          <div key={ id }>
            <input
              type="radio"
              value={ name }
              id={ id }
              onClick={ onClick }
              name="categoryId"
              data-testid="category"
            />
            <label htmlFor={ id }>{ name }</label>
          </div>
        ))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  onClick: propTypes.func.isRequired,
};
