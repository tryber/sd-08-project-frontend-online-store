import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { title, imagePath, price } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <p>{price}</p>
        <img src={ imagePath } alt="product" />
      </div>
    );
  }
}

export default ProductCard;
