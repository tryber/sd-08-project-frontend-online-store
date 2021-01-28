import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoryList extends Component {
  render() {
    const categories = getCategories();

    return (
      <div>
        <h2>Categorias:</h2>
        <ul>
          {categories
            .map((category, index) => (
              <li
                key={ index }
                data-testid="category"
              >
                { category.name }
              </li>))}
        </ul>
      </div>

    );
  }
}

export default CategoryList;
