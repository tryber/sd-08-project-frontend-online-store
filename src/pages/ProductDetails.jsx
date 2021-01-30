import React from 'react';
// , { useState, useEffect }
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
// import Loading from '../components/Loading';
// import NotFound from '../components/NotFound';
import * as api from '../services/api';

// import { getProduct } from '../helpers/products';

export default function ProductDetails() {
  // const [product, setProduct] = useState(null);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const { id, title } = useParams();
  const history = useHistory();
  // const history = useHistory();

  // const getProductInfo = async () => {
  //   setLoading(true);
  //   try {
  //     const data = await getProduct(id);
  //     setProduct(data);
  //   } catch (e) {
  //     setError(true);
  //   }
  //   setLoading(false);
  // };

  api.getCategories();
  api.getProductsFromCategoryAndQuery();

  const handleBuyClick = () => {
    const aux = title.split(' ').join('-');
    console.log(aux);
    history.push(`/cart/${id}/${aux}`);
    // console.log(id);
    // }
  };

  return (
    <main>
      <Header showLogo={ false } showBack />
      <h1>ProductDetails</h1>
      <h2>{id || ''}</h2>
      <span data-testid="product-detail-name">{title}</span>

      <section className="product-add-cart">
        <button
          data-testid="shopping-cart-button"
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
