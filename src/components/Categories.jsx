import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((data) => {
        this.setState({
          categories: data,
        });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((item) => (
          <li
            data-testid="category"
            key={ item.id }
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;
