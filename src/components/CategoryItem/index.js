import React from 'react';
import PropTypes from 'prop-types';

import styles from './CategoryItem.module.css';

class CategoryItem extends React.Component {
  render() {
    const { category: { name, id }, handleChange } = this.props;
    return (
      <div className={ styles.categoryItem }>
        <input
          data-testid="category"
          type="radio"
          name="selected-category"
          value={ id }
          onChange={ handleChange }
        />
        <label htmlFor={ name }>{name}</label>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired };
export default CategoryItem;
