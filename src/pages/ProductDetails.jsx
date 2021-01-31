import React from 'react';
// , { useState, useEffect }
import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Header from '../components/Header';
// import Loading from '../components/Loading';
// import NotFound from '../components/NotFound';
import * as api from '../services/api';

import { actionAdd } from '../store/cart.reducer';

export default function ProductDetails() {
  const { id, title, price } = useParams();
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    dispatch(actionAdd({ id, title, price }));
  };

  return (
    <main>
      <Header showLogo={ false } showBack />
      <h1>ProductDetails</h1>
      <h2>{id || ''}</h2>
      <span data-testid="product-detail-name">{title}</span>
      <section className="product-add-cart">
        <button
          data-testid="product-detail-add-to-cart"
          className="product-buy-button"
          type="button"
          onClick={ handleBuyClick }
        >
          Adicionar ao Carrinho
        </button>
      </section>
    </main>
  );
}
