import React, { useState, useEffect } from 'react';

import CategoriesList from './CategoriesList';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
    setSearchCategory('');
  };

  const handleCategoryClick = (value) => {
    setSearchCategory(value);
    setSearchText('');
  };

  useEffect(() => {
    console.log(searchText, searchCategory);
  });

  return (
    <section className="product-search">
      <div className="home-message" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
      <input
        className="product-search-input"
        type="text"
        placeholder="Buscar produtos, marcas e muito mais..."
        onChange={ handleSearchInputChange }
        value={ searchText }
      />
      <CategoriesList handleClick={ handleCategoryClick } />
    </section>
  );
}
