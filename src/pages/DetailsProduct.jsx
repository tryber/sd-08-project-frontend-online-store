import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// import * as api from '../services/api';
import { BtnShoppingCart } from '../components';
import { localStorageSave } from '../localStorage';

export default function DetailsProject() {
  const { state: { product } } = useLocation();
  const { title, price, thumbnail, attributes } = product;
  const data = Object.values({ ...attributes });
  // const img = Object.values({ ...pictures });
  return (
    <section>
      <div className="cartItems">
        <BtnShoppingCart />
      </div>
      <div>
        <img
          src={ thumbnail.replace('I', 'O') }
          alt="foto"
        />
      </div>
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
      </div>
      <div>
        <span>{price}</span>
      </div>
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => localStorageSave('shoppingCart', product, product.id) }
        >
          Adicionar ao carrinho
        </button>
      </div>
      <div>
        <table>
          <tbody>
            {data.map((attribute, index) => (
              <tr key={ index }>
                <td>{attribute.name}</td>
                <td>{Object.values({ ...attribute.values }).map((e) => e.name)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
