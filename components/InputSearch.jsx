import React from 'react';

export default function InputSearch() {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
        />
      </form>
      <h3 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>
    </div>
  );
}
