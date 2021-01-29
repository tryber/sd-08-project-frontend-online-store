import React, { Component } from 'react';
import { getCategories } from '../services/api';

class FilterCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.categoriesList = this.categoriesList.bind(this);
  }

  componentDidMount() {
    this.categoriesList();
  }

  async categoriesList() {
    const cat = await getCategories();
    const list = cat.map((data) => (
      <li key={ data.id } data-testid="category">
        {data.name}
      </li>
    ));
    this.setState({
      categories: list,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h3>Categorias</h3>
        <ul>
          {categories}
        </ul>
      </div>
    );
  }
}

export default FilterCategories;
