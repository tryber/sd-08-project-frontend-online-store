import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function Categories() {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    //
  });

  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="NavCategories">
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
