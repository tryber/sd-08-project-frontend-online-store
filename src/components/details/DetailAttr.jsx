import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getProductAttributes } from '../../helpers/helpers';

export default function DetailAttr(props) {
  const { productId } = props;
  const [attr, setAttr] = useState([]);

  const getAttributes = async () => {
    if (attr.length === 0) {
      const data = await getProductAttributes(productId);
      setAttr(data);
    }
  };

  getAttributes();

  return (
    <div className="product-attr-list">
      {attr.length > 0
        ? attr.map((i) => (
          <div className="product-attr-list-item" key={ i.type }>
            {' '}
            <div className="item-type">
              {' '}
              {`${i.type}:`}
              {' '}
            </div>
            {' '}
            <div className="item-value">
              {' '}
              {i.value}
              {' '}
            </div>
          </div>
        ))
        : null}
    </div>
  );
}
// {attr.length > 0 ? JSON.stringify(attr) : null}

DetailAttr.propTypes = {
  productId: PropTypes.string.isRequired,
};
