import React, { useState, useEffect } from 'react';

export default function CategoriesList() {
  // const [searchText, setSearchText] = useState('');

  useEffect(() => {
    //
  });

  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="CategoriesList">
      <div>
        <label htmlFor="searchText">
          <input type="Text" name="searchText" onChange={ handleChangeSearchText } />
        </label>
      </div>
      <nav>
        <ul>
          <li> Categoria 1</li>
          <li> Categoria 2</li>
          <li> Categoria 3</li>
        </ul>
      </nav>
    </section>
  );
}
