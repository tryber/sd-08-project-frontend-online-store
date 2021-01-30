import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryItem(props) {
  const { handleClick, id, name } = props;

  const handleCategoryClick = (e) => {
    if (handleClick) {
      handleClick(e.target.value);
    }
  };

  return (
    <li>
      <button type="button" onClick={ handleCategoryClick } value={ id } className="nav-link">
        {name}
      </button>
    </li>
  );
}

CategoryItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
