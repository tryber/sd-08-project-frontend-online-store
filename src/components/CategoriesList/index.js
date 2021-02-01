import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryItem from '../CategoryItem';

import styles from './CategoriesList.module.css';

class CategoriesList extends Component {
  render() {
    const { categories, handleChange } = this.props;
    return (
      <div className={ styles.categoriesList }>
        <p>Categorias</p>
        { categories.map(
          (category) => (
            <CategoryItem
              key={ category.id }
              category={ category }
              handleChange={ handleChange }
            />),
        ) }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategoriesList;
