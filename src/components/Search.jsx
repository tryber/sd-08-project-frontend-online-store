import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './Search.css';

class Search extends React.Component {
  render() {
    return (
      <section>
        <form>
          <div className="inputDiv">
            <input type="search" data-testid="input" />
            <div className="searchIcon"><AiOutlineSearch /></div>
          </div>
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Search;
