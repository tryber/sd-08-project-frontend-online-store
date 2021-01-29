import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        { categories.map((category) => (
          <p key={ category.id } data-testid="category">
            { category.name }
          </p>)) }
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
