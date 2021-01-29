import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartImg from '../shopping-cart.png';
import '../App.css';
import CategoriesFilter from './CategoriesFilter';

export default function InputSearch() {
  return (
    <div>
      <CategoriesFilter />
      <form>
        <input
          type="search"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
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
    </div>
  );
}
