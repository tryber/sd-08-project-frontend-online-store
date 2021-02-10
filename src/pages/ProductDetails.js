import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      details: [],
      general: [],
    };

    this.getDetails = this.getDetails.bind(this);
    this.renderLength = this.renderLength.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  async getDetails() {
    const { match: { params: { id } } } = this.props;

    const params = id.split('&');

    const produto = await api
      .getProductsFromCategoryAndQuery(params[1], params[0]).then((data) => data.results
        .find((item) => item.id === params[1]));

    this.setState({
      details: produto.attributes,
      general: produto,
    });
  }

  renderLength() {
    const { cart } = this.props;
    return (
      <span data-testid="shopping-cart-size">
        (
        { cart.length }
        )
      </span>
    );
  }

  render() {
    const { details, general } = this.state;
    const { handleAddItemToCart, cart } = this.props;
    console.log(cart.length);
    return (
      <div data-testid="product-detail-name" className="atributes-container">
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Cart
          { this.renderLength() }
        </Link>
        <h3>{general.title}</h3>

        <p>
          Preço: R$
          { general.price }
        </p>

        <img src={ general.thumbnail } alt="product" />

        <div className="atributos">
          Detalhes
          {details
            .map((detail, index) => (
              <ul key={ index }>
                <p>
                  {detail.name}
                  :
                  {detail.value_name}
                </p>
              </ul>))}

          <Link to="/"><button type="button">Voltar</button></Link>

          <button
            data-testid="product-detail-add-to-cart"
            onClick={ () => handleAddItemToCart(general) }
            type="button"
          >
            Adicionar ao carrinho
          </button>
        </div>
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
  handleAddItemToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDetails;
