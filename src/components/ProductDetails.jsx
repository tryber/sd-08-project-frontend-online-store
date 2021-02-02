import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ButtonAddToCart from './ButtonAddToCart';
import Rating from './Rating';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.infoState = this.infoState.bind(this);
    const { match: { params: { id } } } = this.props;
    this.state = {
      productId: id,
      productInfo: [],
      shipping: '',
    };
  }

  async componentDidMount() {
    const { productId } = this.state;
    const fetchedInfo = await fetch(`https://api.mercadolibre.com/items?ids=${productId}`);
    fetchedInfo.json().then((r) => this.infoState(r[0].body));
  }

  infoState(array) {
    this.setState({
      productInfo: array,
      shipping: array.shipping.free_shipping,
    });
  }

  waitApiReturn(info, callback) {
    if (info === true) {
      return callback(true);
    }
  }

  render() {
    const { productList, handleAddToCart, renderShipping } = this.props;
    const { productInfo, productId, shipping } = this.state;
    return (
      <main>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
        <h1 data-testid="product-detail-name">{ productInfo.title }</h1>
        <img src={ productInfo.thumbnail } alt="Imagem do produto" />
        <p>{ productInfo.price }</p>
        { this.waitApiReturn(shipping, renderShipping) }
        <h3>Especificacoes Tecnicas</h3>
        <ButtonAddToCart
          onClick={ handleAddToCart }
          id={ productId }
          list={ productList }
          dataTestId="product-detail-add-to-cart"
        />
        <Link to="/">Voltar</Link>
        <Rating productId={ productId } />
      </main>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderShipping: PropTypes.func.isRequired,
};

export default withRouter(ProductDetails);
