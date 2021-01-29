import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <main className="Home">
      <Header />
      <ProductList />
    </main>
  );
}
