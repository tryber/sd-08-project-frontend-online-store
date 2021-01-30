import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
// import SeachBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <main>
      <Header />
      {/* <NavBar /> */}
      <ProductList />
    </main>
  );
}
