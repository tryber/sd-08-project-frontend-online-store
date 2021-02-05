import React, { useState } from 'react';
// , { useState, useEffect }
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import CartSlide from '../components/CartSlide';
import { actionAdd } from '../store/cart.reducer';
import { actionCartUpdate } from '../store/control.reducer';
import ProductInfo from '../components/details/ProductInfo';
import ButtonAddCart from '../components/details/ButtonAddCart';
import InputQuantity from '../components/details/InputQuantity';
import ProductEvaluation from '../components/details/ProductEvaluation';

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const details = useSelector((state) => state.details);
  const control = useSelector((state) => state.control);
  const [found] = useState(details.some((i) => i.id === id));
  const [qtd, setQtd] = useState(1);
  const dispatch = useDispatch();
  // const product = details.find((i) => i.id === (id || ''));
  const productExists = () => {
    if (!found) history.push('/');
  };
  const handleBuyClick = () => {
    productExists();
    if (found) {
      for (let i = 0; i < qtd; i += 1) {
        dispatch(actionAdd(details.find((j) => j.id === id)));
      }
      dispatch(actionCartUpdate());
    }
  };
  const handleChangeQuantity = (value) => {
    setQtd(value);
  };
  productExists();
  return (
    <main>
      <Header showLogo={ false } showBack />
      {control.visibility.slide ? <CartSlide /> : null}
      <section className="product-detail">
        {found ? <ProductInfo productId={ id } /> : null}
        <div className="box-add-cart">
          <InputQuantity
            onHandleChange={ handleChangeQuantity }
            value={ qtd }
            max={ details.find((i) => i.id === id).stock || 0 }
          />
          <ButtonAddCart handleClick={ handleBuyClick } />
        </div>
        {found ? <ProductEvaluation productId={ id } /> : null}
      </section>
    </main>
  );
}
