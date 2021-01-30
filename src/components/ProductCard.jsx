import React from 'react';
import { parsePrice } from '../helpers/helpers';

export default function ProductCard(props) {
  const { title, images, price } = props;

  const aprice = parsePrice(price);

  return (
    <section className="product-card">
      <section className="product-card-image">
        <img src={ images } alt={ title } />
      </section>

      <section className="product-card-info">
        <div className="product-card-info-price">
          <span className="price-part-1">R$</span>
          <span className="price-part-2">{aprice.split(',')[0]}</span>
          <span className="price-part-3">{aprice.split(',')[1]}</span>
        </div>
        <span className="product-card-info-title">{title}</span>
      </section>

      <section className="product-card-buy">
        <button className="product-card-buy-button" type="button">
          Adicionar ao Carrinho
        </button>
      </section>
    </section>
  );
}
