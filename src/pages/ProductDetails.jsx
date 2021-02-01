import React, { useState } from 'react';
// , { useState, useEffect }
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import CartSlide from '../components/CartSlide';
import { actionAdd } from '../store/cart.reducer';
import { actionCartUpdate } from '../store/control.reducer';
import ProductInfo from '../components/details/ProductInfo';
import ButtonAddCart from '../components/details/ButtonAddCart';

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const details = useSelector((state) => state.details);
  const control = useSelector((state) => state.control);
  const [found] = useState(details.some((i) => i.id === id));
  const dispatch = useDispatch();
  // const product = details.find((i) => i.id === (id || ''));
  const productExists = () => {
    if (!found) history.push('/');
    // console.log(found);
  };
  const handleBuyClick = () => {
    // dispatch(actionAdd({ ...product }));
    dispatch(actionCartUpdate());
  };

  productExists();

  return (
    <main>
      <Header showLogo={ false } showBack />
      {control.visibility.slide ? <CartSlide /> : null}
      <section className="product-detail">
        {found ? <ProductInfo productId={ id } /> : null}
        <ButtonAddCart handleClick={ handleBuyClick } />
      </section>
    </main>
  );
}
