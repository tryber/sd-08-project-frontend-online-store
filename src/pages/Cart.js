import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCart: props.location.state.productCart,
      contagemProdutos: [],
    };

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  componentDidMount() {
    this.popularArray();
  }

  popularArray() {
    const { totalCart, contagemProdutos } = this.state;
    for (let posicoes = 0; posicoes < totalCart.length; posicoes += 1) {
      contagemProdutos.push(1);
    }
    this.setState({
      contagemProdutos,
    });
  }

  removeProduct({ target }) {
    const { totalCart, contagemProdutos } = this.state;
    const arrayNovo = contagemProdutos;
    const filterProduct = totalCart.filter((product) => product.title === target.name);
    const newTotalCart = totalCart.filter((product) => product.title !== target.name);
    const index = totalCart.indexOf(filterProduct[0]);
    const test = arrayNovo.filter((item, i) => i !== index);
    this.setState({
      totalCart: newTotalCart,
      contagemProdutos: test });
  }

  increaseQuantity({ target }) {
    const { totalCart, contagemProdutos } = this.state;
    const arrayNovo = [...contagemProdutos];
    const filterProduct = totalCart.filter((product) => product.title === target.name);
    const index = totalCart.indexOf(filterProduct[0]);
    arrayNovo[index] += 1;
    this.setState({
      contagemProdutos: arrayNovo,
    });
  }

  decreaseQuantity({ target }) {
    const { totalCart, contagemProdutos } = this.state;
    const arrayNovo = [...contagemProdutos];
    const filterProduct = totalCart.filter((product) => product.title === target.name);
    const index = totalCart.indexOf(filterProduct[0]);
    if (arrayNovo[index] > 0) {
      arrayNovo[index] -= 1;
      this.setState({
        contagemProdutos: arrayNovo,
      });
    }
  }

  render() {
    const { totalCart, contagemProdutos } = this.state;
    return (
      <div>
        {totalCart.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : totalCart.map((cart, index) => (
            <div id={ cart.title } key={ cart.title }>
              <p data-testid="shopping-cart-product-name">{ cart.title }</p>
              <img src={ cart.thumbnail } alt={ cart.title } />
              <p>{`R$${cart.price}`}</p>
              <button
                name={ cart.title }
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ this.decreaseQuantity }
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">
                { contagemProdutos[index] }
              </p>
              <button
                name={ cart.title }
                type="button"
                data-testid="product-increase-quantity"
                onClick={ this.increaseQuantity }
              >
                +
              </button>
              <button
                type="button"
                name={ cart.title }
                onClick={ this.removeProduct }
              >
                x
              </button>
            </div>))}
        <p>{totalCart.reduce((acc, cur) => acc + cur.price, 0)}</p>
        <button type="button">Finalizar a compra</button>
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productCart: PropTypes.arrayOf(String),
      productNumber: PropTypes.number,
    }),
  }).isRequired,
};

export default Cart;
