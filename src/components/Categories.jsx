import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };

    this.state = {
      list: [{ id: 0, name: '' }],
    };

    this.loadingCategories = this.loadingCategories.bind(this);
  }

  componentDidMount() {
    this.loadingCategories();
  }

  async loadingCategories() {
    const list = await api.getCategories();
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <p>Categorias</p>
        {
          list.map(({ id, name }) => (
            <div key={ id }>
              <input
                type="radio"
                id={ id }
                value={ name }
                name="categoryId"
                data-testid="category"
              />
              <label htmlFor={ id }>{ name }</label>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Categories;
