import React from 'react';
import { shuffle } from '../helpers/helpers';

export default function ProductCard(props) {
  const { title, images, price } = props;

  return (
    <section className="product-card">
      <section className="product-card-image">
        <img src={ images } alt={ title } />
      </section>

      <section className="product-card-info">
        <div className="product-card-info-price">
          <span className="price-part-1">R$</span>
          <span className="price-part-2">100</span>
          <span className="price-part-3">00</span>
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
