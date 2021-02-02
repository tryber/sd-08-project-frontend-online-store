import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.infoState = this.infoState.bind(this);
    const { match: { params: { id } } } = this.props;
    this.state = {
      productId: id,
      productInfo: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  async componentDidMount() {
    const { productId } = this.state;
    const fetchedInfo = await fetch(`https://api.mercadolibre.com/items?ids=${productId}`);
    fetchedInfo.json().then((r) => this.infoState(r[0].body));
  }

  infoState(array) {
    this.setState({
      productInfo: array,
    });
  }

  addToCart({ target }) {
    const { value } = target;
    localStorage.setItem(JSON.parse(value).id, value);
  }

  render() {
    const { productInfo } = this.state;
    return (
      <main>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
        <h1 data-testid="product-detail-name">{ productInfo.title }</h1>
        <img src={ productInfo.thumbnail } alt="Imagem do produto" />
        <p>{ productInfo.price }</p>
        <h3>Especificacoes Técnicas</h3>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          value={ JSON.stringify(productInfo, ['id', 'thumbnail', 'title', 'price']) }
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/">Voltar</Link>
        <Rating />
      </main>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
