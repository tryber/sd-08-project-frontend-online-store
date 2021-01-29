import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartImg from '../shopping-cart.png';
import '../App.css';
import ProductList from './ProductList';

export default class InputSearc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      productList: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {
    const { value } = target;
    this.setState({
      search: value,
      productList: <ProductList />,
    });
  }

  render() {
    const { search, productList } = this.state;
    return (
      <div>
        <form>
          <input
            type="search"
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
            datatest-id="query-input"
          />
        </form>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img
            className="shopping-cart-icon"
            src={ ShoppingCartImg }
            alt="icon shopping cart"
          />
        </Link>
        <button data-testid="query-button" type="button" onClick={ this.handleClick }>Pesquisar</button>
      </div>
    );
  }
}


