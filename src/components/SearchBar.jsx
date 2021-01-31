import React from 'react';
import PropTypes from 'prop-types';
import CategoriesList from './CategoriesList';

export default function SearchBar(props) {
  const { handleCategoryChange, handleQueryChange, handleQueryClick } = props;

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
      <div className="query-box">
        <input
          data-testid="query-input"
          className="product-search-input"
          type="text"
          placeholder="Buscar produtos, marcas e muito mais..."
          onChange={ handleInputChange }
        />
        <button
          className="product-search-button"
          type="button"
          onClick={ handleQueryClick }
          data-testid="query-button"
        >
          <i className="fas fa-search find" />
        </button>
      </div>
      <CategoriesList handleClick={ handleCategoryClick } />
    </section>
  );
}

SearchBar.propTypes = {
  handleQueryChange: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  handleQueryClick: PropTypes.func.isRequired,
};
