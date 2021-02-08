import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  render() {
    const { results, searchText, handleClick, handleChange, addCart, cart } = this.props;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/Cart', state: { cart } } }
        >
          Carrinho
        </Link>
        <SearchBar
          onClick={ handleClick }
          onChange={ handleChange }
          searchText={ searchText }
        />
        <Categories onClick={ handleClick } />
        <ProductList results={ results } addCart={ addCart } />
      </div>
    );
  }
}

export default Home;
