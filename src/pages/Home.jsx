import React from 'react';
import { useSelector } from 'react-redux';
import CartSlide from '../components/CartSlide';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function Home() {
  const control = useSelector((state) => state.control);

  return (
    <main>
      <Header />
      {control.visibility.slide ? <CartSlide /> : null}
      <ProductList />
    </main>
  );
}
