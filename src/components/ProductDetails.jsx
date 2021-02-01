import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    const { location: { state: {
      product: { available_quantity: availableQtd } } } } = props;
    this.state = {
      quantidade: 1,
      available: availableQtd,
      disable: false,
    };
  }

  add() {
    const { available, quantidade } = this.state;
    let newQtd = quantidade + 1;
    if (newQtd > available) {
      newQtd = available;
      alert(`Produto só possui ${available} no estoque`);
    }
    this.setState(() => ({ quantidade: newQtd, disable: false }));
  }

  sub() {
    const { quantidade } = this.state;
    let newQtd = quantidade - 1;
    if (newQtd <= 0) {
      newQtd = 0;
      this.setState(() => ({ disable: true }));
    }
    this.setState(() => ({ quantidade: newQtd }));
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { addCart } = this.props;
    const { title, thumbnail, price, attributes, shipping: { free_shipping },
      available_quantity: availableQtd } = product;
    const { value_name: condicao } = attributes[1];
    const { quantidade, disable } = this.state;
    return (
      <div className="detailDiv">
        <div className="detailProduct">
          <div className="detailImg">
            <img src={ thumbnail } alt="item" />
          </div>
          <div className="detailText">
            <h3>Informações</h3>
            {free_shipping === true && <h1 data-testid="free-shipping">Free Shipping</h1>}
            <p className="detailPrice">{`R$ ${price}`}</p>
            <h1 data-testid="product-detail-name">{title}</h1>
            <p className="detailInfo">{`Quantidade disponivel: ${availableQtd}`}</p>
            <p className="detailInfo">{`Condição do Produto: ${condicao}`}</p>
            <div className="addAndSub">
              <button type="button" onClick={ this.sub }>-</button>
              <div>{quantidade}</div>
              <button type="button" onClick={ this.add }>+</button>
            </div>
            <p className="detailInfo">Quantidade</p>
            <button
              onClick={ () => addCart(product) }
              disabled={ disable }
              className="addToCartButton"
              type="button"
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <div className="detailReview">
          <p>Avaliações</p>
          <Stars />
          <form action="#">
            <input type="text" name="email" placeholder="Email" />
            <textarea type="text" name="Mensagem" placeholder="Avaliação" />
            <button className="submitBtn" type="button">Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        attributes: PropTypes.arrayOf(PropTypes.any).isRequired,
        available_quantity: PropTypes.number.isRequired,
        value_name: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default ProductDetails;
