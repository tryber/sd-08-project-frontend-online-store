import React from 'react';
import MapCategories from '../components/MapCategories';
import ProductList from '../components/ProductList';
import ShopCartButton from '../components/ShopCartButton'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: undefined,
      categorie: undefined,
      filter: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeCategorieState = this.changeCategorieState.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      filter: true,
    });
  }

  handleChange(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  changeCategorieState(name) {
    this.setState({
      categorie: name,
    });
  }

  render() {
    const { filter, searchInput, categorie } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="searchInput" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              name="searchInput"
              type="text"
              onChange={ this.handleChange }
              data-testid="query-input"
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleClick }
            data-testid="query-button"
          >
            Search
          </button>
        </form>
        <ShopCartButton/>

        <MapCategories callback={ this.changeCategorieState } />

        {filter ? <ProductList category={ categorie } query={ searchInput } /> : '' }
      </div>
    );
  }
}

export default Home;
