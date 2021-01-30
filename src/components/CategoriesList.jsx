import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CategoryItem from './CategoryItem';

import * as api from '../services/api';

export default function CategoriesList(props) {
  const [categories, setCategories] = useState([]);

  const { handleClick } = props;

  const fetchCategories = () => {
    //
  };

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories]);

  return (
    <nav className="categories-list">
      <ul>
        <CategoryItem label="Computadores" value="id" />
        <CategoryItem label="Computadores" value="id" />
        <CategoryItem label="Computadores" value="id" />
        <CategoryItem label="Computadores" value="id" />
      </ul>
    </nav>
  );
}

CategoriesList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
