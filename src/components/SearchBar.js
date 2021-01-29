import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar-container">
        <section className="search-bar">
          <input type="text" placeholder="Pesquisa" />
        </section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
