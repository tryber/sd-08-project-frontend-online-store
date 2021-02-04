import React from 'react';
import InitialMessage from '../components/Home/InitialMessage';
import LinkToShoppingCart from '../components/LinkShoppingCart';

function Home() {
  return (
    <div>
      <LinkToShoppingCart />
      <InitialMessage />
    </div>
  );
}

export default Home;
