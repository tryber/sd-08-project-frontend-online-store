import React from 'react';
import CartSlide from '../components/CartSlide';
import Header from '../components/Header';
// import SeachBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <main>
      <Header />
      <CartSlide />
      <ProductList />
    </main>
  );
}
