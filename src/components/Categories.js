import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, onClick } = this.props;
    if (categories !== 0) {
      return (
        <div>
          {categories.map((category) => (
            <button
              name="categoryID"
              type="button"
              value={ category.id }
              key={ category.id }
              data-testid="category"
              onClick={ onClick }
            >
              {category.name}
            </button>))}
        </div>
      );
    }
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categories;
