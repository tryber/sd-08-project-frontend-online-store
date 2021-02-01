import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, onClick } = this.props;
    return (
      <div>
        { categories.map((category) => (
          <button
            type="button"
            onClick={ onClick }
            key={ category.id }
            id={ category.id }
            data-testid="category"
          >
            { category.name }
          </button>)) }
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categories;
