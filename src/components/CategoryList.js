import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [{ name: 'Aguarde' }],
    };
    this.renderCategoryList = this.renderCategoryList.bind(this);
  }

  componentDidMount() {
    this.renderCategoryList();
  }

  async renderCategoryList() {
    const categoryList = await getCategories();
    this.setState(() => ({ categories: categoryList }));
  }

  render() {
    this.renderCategoryList();
    const { categories } = this.state;
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
