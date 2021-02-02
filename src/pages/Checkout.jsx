// import React from 'react';
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputCpf from '../components/checkout/InputCpf';
import InputEmail from '../components/checkout/InputEmail';
import InputFullName from '../components/checkout/InputFullName';
import InputPhone from '../components/checkout/InputPhone';
import Header from '../components/Header';
// import { parseCart } from '../helpers/helpers';
// import { actionClear, actionAdd, actionRemove } from '../store/cart.reducer';

const INITIAL_FORM = {
  fullname: '',
  email: '',
  cpf: '',
  phone: '',
  cep: '',
  address: '',
};

export default function Checkout() {
  // const cart = useSelector((state) => state.cart);
  // const [list, setList] = useState(parseCart(cart));
  const [customer, setCustomer] = useState(INITIAL_FORM);
  const history = useHistory();

  const handleChange = (e) => {
    const aux = {};
    aux[`${e.target.name}`] = e.target.value;
    setCustomer({ ...customer, ...aux });
  };
  const handleBuyClick = () => {
    setCustomer(INITIAL_FORM);
    history.push('/');
  };

  return (
    <main>
      <Header showCheckout={ false } showLogo={ false } showBack />
      <div className="checkout">
        <InputFullName handleChange={ handleChange } />
        <InputEmail handleChange={ handleChange } />
        <InputCpf handleChange={ handleChange } />
        <InputPhone handleChange={ handleChange } />
        <input
          type="text"
          name="cep"
          data-testid="checkout-cep"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="address"
          data-testid="checkout-address"
          onChange={ handleChange }
        />
        <button type="button" data-testid="checkout-products" onClick={ handleBuyClick }>
          Comprar
        </button>
      </div>
    </main>
  );
}
