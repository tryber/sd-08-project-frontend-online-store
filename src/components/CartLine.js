import React from 'react';
import PropTypes from 'prop-types';

export default class CartLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
    };
  }

  addProdutc(product = {}) {
    const { cartList } = this.state;
    const index = cartList.findIndex((procu) => product.id === procu.id);
    if (index >= 0) {
      cartList[index].quantity += 1;
      cartList[index].productPrice += product.price;
    } else {
      cartList.push({ ...product,
        quantity: 1,
        productPrice: product.price,
      });
    }
    this.setState({
      cartList: [...cartList],
    });
    this.callback();
  }

  removeProdutc(product = {}) {
    const { cartList } = this.state;
    if (!product) { return console.log('Não há produto nesse pedido'); }
    const index = cartList.findIndex((procu) => product.id === procu.id
      || product.title === procu.title);
    if (index >= 0) {
      cartList[index].quantity -= 1;
      cartList[index].productPrice -= cartList[index].price;
      if (cartList[index].quantity === 0) {
        cartList.splice(index, 1);
      }
      this.setState({
        cartList: [...cartList],
      });
      this.callback();
    } else {
      console.log(`Produto ${product} não encontrado`);
    }
  }

  //  https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/
  totalPrice(cartList) {
    // const { cartList } = this.state;
    const result = cartList.reduce((total, product) => product.produtoPrice + total, 0);
    return result;
  }

  callback() {
    const { cartList } = this.state;
    return cartList;
  }

  render() {
    const { cartList } = this.props;
    return (

      <section>
        <div>
          <div className="cel-container-row">
            <div className="cel">Item</div>
            <div className="cel">Quantidade</div>
            <div className="cel">Preço</div>
          </div>
          {cartList.map((item) => (
            <div key={ item.id } className="cel-container-row">
              <div
                data-testid="shopping-cart-product-name"
                className="cel"
              >
                {item.title}
              </div>
              <div className="cel">
                <button
                  type="button"
                  name={ item.title }
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.removeProdutc(item) }
                >
                  -
                </button>
                <div
                  data-testid="shopping-cart-product-quantity"
                  className="cel"
                >
                  {item.quantity}
                </div>
                <button
                  type="button"
                  name={ item.title }
                  onClick={ () => this.addProdutc(item) }
                  data-testid="product-increase-quantity"
                >
                  +
                </button>
              </div>
              <div className="cel">{parseFloat(item.price).toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

CartLine.propTypes = {
  cartList: PropTypes.arrayOf({
    item: PropTypes.objectOf({
      id: PropTypes.stringnumber,
      price: PropTypes.number,
      title: PropTypes.stringnumber,
      quantity: PropTypes.number,
    }),
  }).isRequired,
  callback: PropTypes.func.isRequired,
};
