import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class ListAllCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <button
            data-testid="category"
            type="button"
            key={ category.id }
          >
            { category.name }
          </button>
        ))}
      </div>
    );
  }
}
