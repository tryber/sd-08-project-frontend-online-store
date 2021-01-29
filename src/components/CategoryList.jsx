import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      category: [],
    };
  }

  async componentDidMount() {
    const category = await api.getCategories();
    this.updateState(category);
  }

  updateState(category) {
    this.setState({ category });
  }

  render() {
    const { category } = this.state;
    console.log(category);
    return (
      <div className="category-list">
        {category.map((item) => (
          <li
            data-testid="category"
            key={ item.id }
          >
            {item.name}
          </li>
        ))}
      </div>
    );
  }
}

export default CategoryList;
