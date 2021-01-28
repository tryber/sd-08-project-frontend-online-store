import React from 'react';
import MapCategories from '../components/MapCategories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="searchInput" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input name="searchInput" type="text" />
        </label>
        <MapCategories />
      </div>
    );
  }
}

export default Home;
