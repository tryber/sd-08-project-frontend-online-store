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
                    <div className="cel">{item.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </section>)}
      </div>
    );
  }
}

Cart.propTypes = { productId: PropTypes.arrayOf(PropTypes.string).isRequired };
