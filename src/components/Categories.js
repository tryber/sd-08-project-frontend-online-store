import React from 'react';

class Categories extends React.Component {
  render() {
    const { categories } = this.state;
    if (categories !== 0) {
      return (
        <div>
          {categories.map((category) => (
            <button
              type="button"
              key={ category.id }
              data-testid="category"
            >
              {categories}
            </button>))}
        </div>
      );
    }
  }
}

export default Categories;
