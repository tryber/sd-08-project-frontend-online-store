import React from 'react';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductList from '../components/ProductList';
import InputSearch from '../components/InputSearch';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header><InputSearch /></header>
        <aside><CategoriesFilter /></aside>
        <main><ProductList /></main>
      </div>
    );
  }
}
