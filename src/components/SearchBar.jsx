import React from 'react';
import PropTypes from 'prop-types';
import CategoriesList from './CategoriesList';

export default function SearchBar(props) {
  const { handleCategoryChange, handleQueryChange } = props;

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    if (value === '') return handleQueryChange(undefined);
    handleQueryChange(value);
  };

  const handleCategoryClick = (value) => {
    handleCategoryChange(value);
  };
  // data-testid=query-button
  return (
    <section className="product-search">
      <div className="home-message" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>

      <input
        data-testid="query-input"
        className="product-search-input"
        type="text"
        placeholder="Buscar produtos, marcas e muito mais..."
        onChange={ handleInputChange }
      />
      <CategoriesList handleClick={ handleCategoryClick } />
    </section>
  );
}

SearchBar.propTypes = {
  handleQueryChange: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};
