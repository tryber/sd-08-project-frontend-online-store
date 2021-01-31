import React from "react";
import PropTypes from "prop-types";

import * as api from "../services/api";

export default function CategoryItem(props) {
  const { handleClick, id, name } = props;

  const handleCategoryClick = (e) => {
    if (handleClick) {
      handleClick(e.target.value);
    }
    api.getCategories();
    // api.getProductsFromCategoryAndQuery();
  };

  return (
    <li>
      <button
        data-testid="category"
        type="button"
        onClick={handleCategoryClick}
        value={id}
        className="nav-link"
      >
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
