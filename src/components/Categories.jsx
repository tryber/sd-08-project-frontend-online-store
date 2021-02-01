import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };

    this.GetApiCategories = this.GetApiCategories.bind(this);
  }

  componentDidMount() {
    this.GetApiCategories();
  }

  async GetApiCategories() {
    const categoriesArray = await getCategories();
    this.setState({ categoriesList: categoriesArray });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div>
        {categoriesList.map(({ name, id }) => (
          <button
            key={ id }
            type="button"
            data-testid="category"
          >
            { name }
          </button>))}
      </div>
    );
  }
}

export default Categories;
