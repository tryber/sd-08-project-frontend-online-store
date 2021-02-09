import React from 'react';
import PropTypes from 'prop-types';
import CartLine from '../components/CartLine';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    const { productId } = this.props;
    this.state = {
      cartList: [],
      idList: productId,
    };
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.attState = this.attState.bind(this);
  }

  async componentDidMount() {
    await this.getProductInfo();
  }

  async getProductInfo() {
    const { idList } = this.state;
    idList.map(async (idItem) => {
      await fetch(`https://api.mercadolibre.com/items/${idItem}`)
        .then((response) => response.json())
        .then((data) => this.addProduct(data));
    });
  }

  sendState() {
    const { attProductIdList } = this.props;
    const { idList } = this.state;

    attProductIdList(idList);
  }

  attState(cartList) {
    const cartListAtt = cartList;
    const idListAtt = cartList.map((item) => item.id);
    this.setState({
      cartList: [...cartListAtt],
      idList: [...idListAtt],
    }, () => this.sendState());
  }

  addProduct(product) {
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
  }

  deleteItem(product) {
    const { cartList } = this.state;
    const index = cartList.findIndex((procu) => product.id === procu.id);
    if (index >= 0) {
      cartList[index].quantity = 0;
      cartList[index].productPrice = 0;
      if (cartList[index].quantity === 0) {
        cartList.splice(index, 1);
        this.attState(cartList);
      }
    }
  }

  removeProduct(product = {}) {
    const { cartList } = this.state;

    const index = cartList.findIndex((procu) => product.id === procu.id);
    if (index >= 0) {
      cartList[index].quantity -= 1;
      cartList[index].productPrice -= cartList[index].price;
      if (cartList[index].quantity === 0) {
        cartList.splice(index, 1);
        this.attState(cartList);
      }
    }
  }

  //  https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/
  totalPrice() {
    const { cartList } = this.state;
    const result = cartList.reduce((total, product) => product.produtoPrice + total, 0);
    return result;
  }

  render() {
    const { cartList = [] } = this.state;
    return (
      <div className="cart">
        {(cartList.length === 0)
          ? (<h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>)
          : (
            <>
              <div className="cel-container-row">
                <div className="cel" />
                <div className="cel">Item</div>
                <div className="cel">Quantidade</div>
                <div className="cel">Preço Unitário</div>
                <div className="cel">Preço Total</div>
              </div>
              <div>
                {cartList.map((item) => (
                  <CartLine
                    key={ item.id }
                    item={ item }
                    addProduct={ () => this.addProduct(item) }
                    removeProduct={ () => this.removeProduct(item) }
                    deleteItem={ () => this.deleteItem(item) }
                  />
                ))}
              </div>
            </>
          )}
      </div>
    );
  }
}

Cart.propTypes = {
  productId: PropTypes.arrayOf(PropTypes.string).isRequired,
  attProductIdList: PropTypes.func.isRequired,
};
