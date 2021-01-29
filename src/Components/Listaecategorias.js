import React, { Component } from 'react';
import * as api from '../services/api';
import './Listadecategorias.css';

export default class Listadecategorias extends Component {
  constructor() {
    super();
    this.listOfCategories = this.listOfCategories.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.listOfCategories();
  }

  async listOfCategories() {
    const Fetch = await api.getCategories();
    this.setState({
      categories: Fetch,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="container-lists-categories">
        {categories.map((categoria) => (
          <label
            data-testid="category"
            htmlFor="input-label-lists-categories"
            className="label-lists-categories"
            key={ categoria.id }
            value={ categoria.name }
          >
            { categoria.name }
            <input
              id="input-label-lists-categories"
              value={ categoria.id }
              name="category"
              type="radio"
              onClick=""
            />
          </label>
        ))}
      </div>
    );
  }
}
