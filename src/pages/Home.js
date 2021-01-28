import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="search-bar-container">
        <section className="search-bar">
          <input type="text" placeholder="Digite aqui sua pesquisa" />
        </section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
