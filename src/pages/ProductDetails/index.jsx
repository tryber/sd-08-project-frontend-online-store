import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Evaluation from '../../components/Evaluation';
import Loading from '../../components/Loading';
import ButtonAddCart from '../../components/ButtonAddCart';

const fetchAPI = 'https://api.mercadolibre.com/items/';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      product: {},
      shoppingCart: {},
    };
    this.responseFromAPI = this.responseFromAPI.bind(this);
    this.getCartData = this.getCartData.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.saveCartData = this.saveCartData.bind(this);
  }

  componentDidMount() {
    this.responseFromAPI();
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

  addProductToCart(productInfo) {
    const { shoppingCart } = this.state;

    const { id } = productInfo;
    if (shoppingCart[id]) {
      productInfo.amountInCart = shoppingCart[id].amountInCart + 1;
    } else {
      productInfo.amountInCart = 1;
    }

    this.setState({
      shoppingCart: { ...shoppingCart, [id]: productInfo },
    }, () => { this.saveCartData(); });
  }

  async responseFromAPI() {
    const { match: { params: { id } } } = this.props;
    const responseAPI = await fetch(`${fetchAPI}/${id}`);
    const response = await responseAPI.json();
    this.setState(
      {
        loading: false,
        product: response,
      },
    );
  }

  render() {
    const { loading, product, shoppingCart } = this.state;
    if (loading) {
      return (
        <>
          <Button shoppingCart={ shoppingCart } />
          <Loading />
        </>
      );
    }
    return (
      <div>
        <div>
          <h3>Detalhamento do produto</h3>
          <h2 data-testid="product-detail-name">
            {product.title}
          </h2>
          <img
            src={ product.thumbnail }
            alt={ `imagem de ${product.title}` }
          />
          <h4>
            R$
            {' '}
            { product.price }
          </h4>
          <ul>
            <h2>Detalhes Técnicos</h2>
            {product.attributes.map((attribute) => (
              <p key={ attribute.id }>
                {attribute.name}
                :
                {'  '}
                {attribute.value_name}
              </p>
            ))}
          </ul>
          <Evaluation />
        </div>
        <ButtonAddCart
          productInfo={ product }
          addProductToCart={ this.addProductToCart }
        />
        <Button shoppingCart={ shoppingCart } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
