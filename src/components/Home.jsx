import React from 'react';
import InputSearch from './InputSearch';
import ProductList from './ProductList';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <InputSearch />
        </header>
        <main>
          <ProductList />
        </main>
      </div>
    );
  }
}
