import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();

    this.findCategories = this.findCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.findCategories();
  }

  async findCategories() {
    const categoriesFromApi = await api.getCategories();
    this.setState({
      categories: categoriesFromApi,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((item) => (
          <p data-testid="category" key={ item.id }>
            {item.name}
          </p>
        ))}
      </div>
    );
  }
}

export default CategoryList;
