import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { product } = this.props.location.state;
    const { addCart } = this.props;
    const { title, thumbnail, price } = product;

    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt="item" />
        <p>{price}</p>
        <button onClick={ () => addCart(product) } type="button">Adicionar ao carrinho</button>

      </div>
    );
  }
}

export default ProductDetails;
