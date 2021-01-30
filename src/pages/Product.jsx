import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();

  return (
    <main className="ProductDetails">
      <header>
        <div />
      </header>
      <h1>ProductDetails</h1>
      <h2>{id || ''}</h2>
    </main>
  );
}
