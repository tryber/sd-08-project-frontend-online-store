import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import CategoryItem from './CategoryItem';
import { actionUpdate } from '../store/categories.reducer';

import * as api from '../services/api';

export default function CategoriesList(props) {
  // const [categories, setCategories] = useState([]);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const { handleClick } = props;

  const fetchCategories = async () => {
    try {
      const list = await api.getCategories();
      dispatch(actionUpdate(list));
      // setCategories(categories);
    } catch (e) {
      // setCategories([]);
      dispatch(actionUpdate([]));
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
