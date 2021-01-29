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
            {categories.map((category) => {
              return <label data-testid="category">
                      <input type="checkbox" name={ category.id } value={ category.id } />
                      { category.name }
                      <br />
                    </label>
            })}
        </div>
      </form>
    )
  }
}

export default CategoriesFilter;
