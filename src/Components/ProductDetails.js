import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { value } = this.state;
    return (
      <div key={ product.id } data-testid="product">
        <p data-testid="product-detail-name">{ product.title }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>
          R$:
          { product.price }
        </p>
        <Link
          to={ {
            pathname: '/shoppingcart',
            state: { product },
          } }
          data-testid="product-detail-add-to-cart"
        >
          Adcionar ao carrinho
        </Link>
        <forms onSubmit={ this.handleSubmit }>
          <br />
          <label htmlFor="product-detail-evaluation">
            Avaliação
            <input type="number" min="1" max="5" />
            <textarea
              value={ value }
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
            />
            <button type="submit">Enviar</button>
          </label>
        </forms>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
