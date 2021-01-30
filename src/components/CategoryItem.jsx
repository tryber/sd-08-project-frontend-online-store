import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryItem(props) {
  const { handleClick, label, value } = props;

  const handleCategoryClick = (e) => {
    if (handleClick) {
      handleClick(e.target.value);
    }
  };

  return (
    <li>
      <button
        type="button"
        onClick={ handleCategoryClick }
        value={ value }
        className="nav-link"
      >
        {label}
      </button>
    </li>
  );
}

CategoryItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
