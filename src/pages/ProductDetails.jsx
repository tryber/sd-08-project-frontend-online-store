import React from 'react';
// , { useState, useEffect }
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
// import Loading from '../components/Loading';
// import NotFound from '../components/NotFound';
import * as api from '../services/api';

// import { getProduct } from '../helpers/products';
const DEF_CART_KEY = 'CART_ITENS';

export default function ProductDetails() {
  // const [product, setProduct] = useState(null);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const { id, title } = useParams();
  const history = useHistory();

  const handleBuyClick = () => {
    const data = localStorage.getItem(DEF_CART_KEY);
    if (data === '' || !data) {
      localStorage.setItem(DEF_CART_KEY, JSON.stringify([{ id, title }]));
    } else {
      const cart = JSON.parse(data);
      cart.push({ id, title, count: 1 });
      localStorage.setItem(DEF_CART_KEY, JSON.stringify(cart));
    }
  };

  return (
    <main>
      <Header showLogo={ false } showBack showCheckout={ false } />
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
