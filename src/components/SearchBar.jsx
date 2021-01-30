import React, { useState, useEffect } from 'react';

import NavBar from './NavBar';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
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
      <NavBar />
    </section>
  );
}
