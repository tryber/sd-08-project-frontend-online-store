import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Details extends React.Component {
  render() {
    // const { title, thumbnail, price } = this.props.location.state.product;
    const { location: { state: { product: { title, thumbnail, price } } } } = this.props;

    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link to="/cartcheckout">
          <button type="submit">
            ADICIONAR AO CARRINHO
          </button>
        </Link>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      product: PropTypes.string,
      location: PropTypes.shape({
        state: PropTypes.shape({
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          price: PropTypes.number,
        }),
      }),
    }),
  }),
}.isRequired;

export default Details;
