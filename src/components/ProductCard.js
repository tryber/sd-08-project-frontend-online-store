import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {}
    };
  }

  render() {
    return (
      <div>
        <h3>{}</h3>
        {/* <img src={} alt="Imagem do produto"/> */}
        <span>{}</span>
      </div>
    );
  }
}

export default ProductCard;
