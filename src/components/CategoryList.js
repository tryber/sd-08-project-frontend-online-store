import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [{ name: 'Aguarde' }],
      loading: true,
    };
    this.renderCategoryList = this.renderCategoryList.bind(this);
  }

  componentDidMount() {
    this.renderCategoryList();
  }

  async renderCategoryList() {
    const categoryList = await getCategories();
    this.setState(() => ({
      categories: categoryList,
      loading: false }));
  }

  render() {
    const { categories, loading } = this.state;

    if (loading) {
      return (
        <div>
          <h2>{ categories[0].name}</h2>
        </div>
      );
    }
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
