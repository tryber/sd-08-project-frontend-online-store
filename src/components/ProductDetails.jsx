import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { product } = this.props.location.state;
    const { title, thumbnail, price } = product;
    console.log(product);
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt="item" />
        <p>{price}</p>
        <button type="text">Adicionar ao carrinho</button>

      </div>
    );
  }
}

export default ProductDetails;
