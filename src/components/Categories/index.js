import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

import { getCategories } from '../../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    const { handleSearchCategory } = this.props;
    return (
      <div className={ styles.categories }>
        <h2 className={ styles.categoriesTitle }>Categorias</h2>
        <div className={ styles.categoriesWrapper }>
          { categories.map(({ id, name }) => (
            <label
              key={ id }
              htmlFor={ id }
              className={ styles.categoryItem }
            >
              { name }
              <input
                style={ { display: 'none' } }
                name="category"
                type="radio"
                id={ id }
                className={ styles.categoryItem }
                data-testid="category"
                onChange={ handleSearchCategory }
              />
            </label>
          )) }
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  handleSearchCategory: PropTypes.func.isRequired,
};

export default Categories;
