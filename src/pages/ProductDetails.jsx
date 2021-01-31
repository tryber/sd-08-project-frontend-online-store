import React from 'react';
// , { useState, useEffect }
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
// import Loading from '../components/Loading';
// import NotFound from '../components/NotFound';
import * as api from '../services/api';

import { actionAdd } from '../store/cart.reducer';

export default function ProductDetails() {
  const { id } = useParams();
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const product = details.find((i) => i.id === id);

  const handleBuyClick = () => {
    dispatch(actionAdd({ ...product }));
  };

  return (
    <main>
      <Header showLogo={ false } showBack />
      <section className="product-detail">
        <h1>Detalhe do Produto</h1>
        <h2>{product.id}</h2>
        <img src={ product.thumbnail } alt={ product.title } />
        <span className="product-detail-name" data-testid="product-detail-name">
          {product.title}
        </span>
        <span className="product-detail-price">
          <span className="product-simbol">R$</span>
          <span>{product.price}</span>
        </span>
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
      </section>
    </main>
  );
}
