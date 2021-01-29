import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <section>
        <form>
          <input type="search" data-testid="input" />
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Search;
