import React from 'react';
import MapCategories from '../components/MapCategories';
import ProductList from '../components/ProductList';
import ShopCartButton from '../components/ShopCartButton';
import './Home.css';

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
    this.addProductCart = this.addProductCart.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ filter: false }, () => {
      this.setState({
        filter: true,
      });
    });
  }

  handleChange(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  addProductCart(product) {
    let itensFromLocalStorage = [];
    if (localStorage.length !== 0) {
      itensFromLocalStorage = JSON.parse(localStorage.products);
      const productInCart = itensFromLocalStorage.filter(
        (item) => item.id === product.id,
      );
      if (productInCart.length === 0) {
        localStorage.setItem('products',
          JSON.stringify([...itensFromLocalStorage, product]));
      }
    } else {
      localStorage.setItem('products',
        JSON.stringify([...itensFromLocalStorage, product]));
    }
  } // só atualizar o localStorage e nao o estado fazer o estado receber o local storage

  changeCategorieState(name) {
    this.setState({ filter: false }, () => {
      this.setState({
        categorie: name,
        filter: true,
      });
    });
  }

  render() {
    const { filter, searchInput, categorie } = this.state;
    return (
      <section>
        <form className="form">
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
        <ShopCartButton />
        <div className="mapCategories">
          <MapCategories callback={ this.changeCategorieState } />
        </div>
        <div>
          {filter ? <ProductList
            category={ categorie }
            query={ searchInput }
            callback={ this.addProductCart }
          /> : ''}
        </div>
      </section>
    );
  }
}

export default Home;
