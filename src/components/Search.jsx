import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form>
  <label data-testid="home-initial-message">
  Digite algum termo de pesquisa ou escolha uma categoria.
    <input type="text" name="name" />
  </label>
  <i class="fas fa-search"></i>
</form>
    );
  }
}

export default Search;