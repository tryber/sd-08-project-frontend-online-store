import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CategoryItem from './CategoryItem';

import * as api from '../services/api';

export default function CategoriesList(props) {
  const [categories, setCategories] = useState([]);

  const { handleClick } = props;

  const fetchCategories = async () => {
    try {
      const categories = await api.getCategories();
      setCategories(categories);
    } catch (e) {
      setCategories([]);
    }
  };

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories]);

  return (
    <nav className="categories-list">
      <ul>
        {categories.length > 0
          ? categories.map((i) => (
            <CategoryItem key={ i.id } { ...i } handleClick={ handleClick } />
          ))
          : null}
      </ul>
    </nav>
  );
}

CategoriesList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
