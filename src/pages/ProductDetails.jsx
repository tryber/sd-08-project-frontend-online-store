import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

import { getProduct } from '../helpers/products';

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  const getProductInfo = async () => {
    setLoading(true);
    try {
      const data = await getProduct(id);
      setProduct(data);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (product === null && !error) {
      getProductInfo();
    }
  }, [product]);

  const handleBuyClick = () => {
    if (product !== null) {
      console.log(product);
    }
  };

  return (
    <main>
      <Header showLogo={ false } showBack />
      <h1>ProductDetails</h1>
      <h2>{id || ''}</h2>
      <span data-testid="product-detail-name">
        {product !== null ? product.title : null}
      </span>
      <NotFound show={ error } />
      <Loading show={ loading } />
      {product !== null ? <div>{JSON.stringify(product)}</div> : null}
      <section className="product-add-cart">
        <button className="product-buy-button" type="button" onClick={ handleBuyClick }>
          Adicionar ao Carrinho
        </button>
      </section>
    </main>
  );
}
