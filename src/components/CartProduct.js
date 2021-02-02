import React from 'react';

class CartProduct extends React.Component {
  render() {
    const { prop } = this.props;
    return (
      <section className="cartlist-section">
        <div key={ prop.id } className="cartlist-itens">
          <img src={ prop.thumbnail } alt={ prop.title } />
          <p>{prop.title}</p>
          <p>
            R$
            {prop.price.toFixed(2)}
          </p>
        </div>
      </section>
    );
  }
}
export default CartProduct;
