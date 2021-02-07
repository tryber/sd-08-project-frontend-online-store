import React from 'react';
import PropTypes from 'prop-types';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    const { productId } = this.props;
    this.state = {
      cartList: [],
      idList: productId,
      qnt: 1,
    };
  }

  async componentDidMount() {
    await this.getProductInfo();
  }

  setCart(data) {
    const { cartList } = this.state;
    this.setState({
      cartList: [...cartList, data],
    });
  }

  async getProductInfo() {
    const { idList } = this.state;
    idList.map(async (idItem) => {
      await fetch(`https://api.mercadolibre.com/items/${idItem}`)
        .then((response) => response.json())
        .then((data) => this.setCart(data));
    });
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
    } else {
      console.log(`Produto ${product} não encontrado`);
    }
  }

  //  https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/
  totalPrice() {
    const { cartList } = this.state;
    const result = cartList.reduce((total, product) => product.produtoPrice + total, 0);
    return result;
  }

  render() {
    const { cartList, qnt } = this.state;
    return (
      <div className="cart">
        {cartList.length === 0
          ? (
            <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          )
          : (
            <section>
              <div>
                <div className="cel-container-row">
                  <div className="cel">Item</div>
                  <div className="cel">Preço</div>
                  <div className="cel">Quantidade</div>
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
                      <button type="button" name={ item.title }> - </button>
                      <div
                        data-testid="shopping-cart-product-quantity"
                        className="cel"
                      >
                        {qnt}
                      </div>
                      <button type="button" name={ item.title }> + </button>
                    </div>
                    <div className="cel">{parseFloat(item.price).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </section>)}
      </div>
    );
  }
}

Cart.propTypes = { productId: PropTypes.arrayOf(PropTypes.string).isRequired };
