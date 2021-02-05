import React from 'react';
import PropTypes from 'prop-types';

export default function CardInfo(props) {
  const { price, title } = props;
  const aprice = price.toString();

  return (
    <section className="product-card-info" data-testid="product">
      <div className="product-card-info-price">
        <span className="price-part-1">R$</span>
        <span className="price-part-2">{aprice.split(',')[0]}</span>
        <span className="price-part-3">{aprice.split(',')[1]}</span>
      </div>
      <span className="product-card-info-title">{title}</span>
    </section>
  );
}

CardInfo.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
