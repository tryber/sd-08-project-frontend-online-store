import React from 'react';
import PropTypes from 'prop-types';

class CartProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      object: [],
      quantity: 1,
    };
    this.updatestate = this.updatestate.bind(this);
  }

  componentDidMount() {
    const { prop } = this.props;
    this.updatestate(prop);
  }

  async updatestate(prop) {
    this.setState({ object: prop });
  }

  render() {
    const { object, quantity } = this.state;
    const { price } = object;
    if (object.length === 0) {
      return (
        <div />
      );
    }
    return (
      <section className="cartlist-section">
        <div key={ object.id } className="cartlist-itens">
          <img src={ object.thumbnail } alt={ object.title } />
          <p
            data-testid="shopping-cart-product-name"
          >
            {object.title}
          </p>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            {`Quantidade ${quantity}`}
          </p>
          <p>
            {`R$: ${price.toFixed(2)}`}
          </p>
        </div>
      </section>
    );
  }
}

CartProduct.propTypes = {
  prop: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    installments: PropTypes.string,
    quantity: PropTypes.string,
  }).isRequired,
};

export default CartProduct;
