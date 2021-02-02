import React from 'react';

class CartProduct extends React.Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.prop.title}
        </h2>
        <p>
          R$
          {this.props.prop.price.toFixed(2)}
        </p>
      </div>
    );
  }
}
export default CartProduct;
