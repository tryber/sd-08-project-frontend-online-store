import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import DetailImage from './DetailImage';
import DetailAttr from './DetailAttr';

export default function ProductInfo(props) {
  const { productId } = props;
  const details = useSelector((state) => state.details);
  // const dispatch = useDispatch();
  const product = details.find((i) => i.id === productId);

  // const product = details.find((i) => i.id === (id));
  return (
    <section className="product-info">
      <div className="product-info-left">
        <div className="box-left">
          <DetailImage url={ product.thumbnail } freeshipping={ product.shipping } />
        </div>
        <div className="box-right">
          <div className="product-detail-id">{product.id}</div>
          <div className="product-detail-name" data-testid="product-detail-name">
            {product.title}
          </div>
          <div className="product-detail-price">{`R$  ${product.price}`}</div>
        </div>
      </div>
      <div className="product-info-right">
        <DetailAttr productId={ productId } />
      </div>
    </section>
  );
}

ProductInfo.propTypes = {
  productId: PropTypes.string.isRequired,
};
