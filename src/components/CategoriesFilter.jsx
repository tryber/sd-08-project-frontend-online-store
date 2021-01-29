import React, { Component } from 'react';
import '../App.css';
import * as api from '../services/api';

class CategoriesFilter extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    await this.getCategories();
  }

  async getCategories() {
    const date = await api.getCategories();
    this.setState({
      categories: date,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <form>
        <div>
          <h3>Categorias:</h3>
          {categories.map((category) => (
            <label data-testid="category" key={ category.id } htmlFor="category">
              <input
                type="radio"
                name="categoryRadio"
                value={ category.id }
                id={ category.id }
              />
              { category.name }
              <br />
            </label>
          ))}
        </div>
      </form>
    );
  }
}

export default CategoriesFilter;
