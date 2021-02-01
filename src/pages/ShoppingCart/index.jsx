import React from 'react';
import { AiFillPlusCircle,
  AiOutlinePlusCircle,
  AiFillMinusCircle,
  AiOutlineMinusCircle } from 'react-icons/ai';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      shoppingCart: {},
    };

    this.getCartData = this.getCartData.bind(this);
    this.saveCartData = this.saveCartData.bind(this);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount() {
    this.getCartData();
  }

  getCartData() {
    const cart = localStorage.getItem('currentCart');
    if (cart) this.setState({ shoppingCart: JSON.parse(cart) });
  }

  saveCartData() {
    const { shoppingCart } = this.state;
    localStorage.setItem('currentCart', JSON.stringify(shoppingCart));
  }

  addOne(product) {
    const { shoppingCart } = this.state;
    const { id } = product;
    const newAmount = { ...product };
    newAmount.amountInCart += 1;
    this.setState(
      { shoppingCart: { ...shoppingCart, [id]: newAmount } },
      () => { this.saveCartData(); },
    );
  }

  removeOne(product) {
    const { shoppingCart } = this.state;
    const { id } = product;
    const newAmount = { ...product };
    newAmount.amountInCart -= 1;
    this.setState(
      { shoppingCart: { ...shoppingCart, [id]: newAmount } },
      () => { this.saveCartData(); },
    );
  }

  clearCart() {
    localStorage.setItem('currentCart', JSON.stringify({}));
    this.setState({ shoppingCart: {} });
  }

  render() {
    const { shoppingCart } = this.state;

    return (
      <div>
        <h4 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h4>
        { Object.keys(shoppingCart).map((id) => {
          const item = shoppingCart[id];
          const minusIsDisabled = !item.amountInCart;
          const plusIsDisabled = item.amountInCart >= item.available_quantity;
          return (
            <div key={ item.id }>
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <p data-testid="shopping-cart-product-quantity">{item.amountInCart}</p>
              <button
                type="button"
                disabled={ minusIsDisabled }
                onClick={ () => { this.removeOne(item); } }
                className="minus"
                data-testid="product-decrease-quantity"
              >
                {minusIsDisabled ? <AiFillMinusCircle /> : <AiOutlineMinusCircle />}
              </button>
              <button
                type="button"
                disabled={ plusIsDisabled }
                onClick={ () => { this.addOne(item); } }
                className="plus"
                data-testid="product-increase-quantity"
              >
                {plusIsDisabled ? <AiFillPlusCircle /> : <AiOutlinePlusCircle />}
              </button>
            </div>
          );
        }) }
        <button type="button" onClick={ this.clearCart }>Limpar Carrinho</button>
      </div>
    );
  }
}

export default ShoppingCart;
