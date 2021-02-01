import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getProductAttributes } from '../../helpers/helpers';

export default function ProductAttr(props) {
  const { productId } = props;
  const [attr, setAttr] = useState([]);

  const getAttributes = async () => {
    try {
      const data = await getProductAttributes(productId);
      setAttr(data);
    } catch (e) {
      setAttr([]);
    }
  };

  getAttributes();

  return (
    <div className="product-attr">{attr.length > 0 ? JSON.stringify(attr) : null}</div>
  );
}

ProductAttr.propTypes = {
  productId: PropTypes.string.isRequired,
};
