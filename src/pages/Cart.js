import React from 'react';
import PropTypes from 'prop-types';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    const { productId } = this.props;
    this.state = {
      cartList: [],
      idList: productId,
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

  render() {
    const { cartList } = this.state;
    return (
      <div>
        {cartList.length === 0
          ? (
            <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          )
          : (
            <section>
              <div>
                <div className="cel-container">
                  <p className="cel">Item</p>
                  <p className="cel">Preço</p>
                  <p className="cel">Quantidade</p>
                  <p className="cel">Total</p>
                </div>
                {cartList.map((item) => (
                  <div key={ item.id } className="cel-container">
                    <p data-testid="shopping-cart-product-name">{item.title}</p>
                    <p data-testid="shopping-cart-product-quantity">1</p>
                    <p>{item.price}</p>
                    <p>{(item.price)}</p>
                  </div>
                ))}
              </div>
            </section>)}
      </div>
    );
  }
}

Cart.propTypes = { productId: PropTypes.arrayOf(PropTypes.string).isRequired };
