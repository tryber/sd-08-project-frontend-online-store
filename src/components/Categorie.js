import React from 'react';
import '../styles/Categories.css';
// importando as funções da API como api

function Categories(props) {
  const { onClick, allCats } = props;
  return (
    <div className="sidebar">
      <h4>Categories</h4>
      {allCats.map(({ name, id }) => (
        <label htmlFor={name} key={id}>
          <input
            type="radio"
            className="categoria"
            data-testid="category"
            key={id}
            id={id}
            name="category"
            onClick={(event) => onClick(event)}
          />
          {name}
        </label>
      ))}
    </div>
  );
}

export default Categories;
