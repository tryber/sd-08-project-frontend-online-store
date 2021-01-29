import React from 'react';
import PropTypes from 'prop-types';

import './categoryList.css';

class CategoryList extends React.Component {
  render() {
    const { list, filterProducts, onClick } = this.props;
    return (
      <div>
        {list.map((category) => (
          <button
            type="button"
            data-testid="category"
            key={ category.id }
            onChange={ filterProducts }
            onClick={ onClick }
            name="category"
          >
            { category.name }
          </button>
        ))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  list: PropTypes.arrayOf(String).isRequired,
  filterProducts: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryList;
