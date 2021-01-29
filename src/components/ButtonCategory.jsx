import React from 'react';
import * as api from '../services/api';

class ButtonCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((resolve) => this.setState({ categories: resolve }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        { categories.map((category) => (
          <button
            key={ category.id }
            type="button"
            data-testid="category"
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

export default ButtonCategory;
