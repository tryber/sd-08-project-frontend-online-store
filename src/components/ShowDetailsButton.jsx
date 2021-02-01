import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShowDetails extends React.Component {
  render() {
    const { id, title, thumbnail, price, attributes, condition,
      // available_quantity, sold_quantity, stop_time, accepts_mercadopago, currency_id,
      address, shipping } = this.props;
    // console.log(attributes);
    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/pages/details/${id}`,
          state: { id,
            title,
            thumbnail,
            price,
            attributes,
            // available_quantity,
            // sold_quantity,
            // stop_time,
            // accepts_mercadopago,
            // currency_id,
            condition,
            address,
            shipping },
        } }
      >
        Product Details
      </Link>
    );
  }
}

ShowDetails.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  attributes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    value_name: PropTypes.string,
    value_id: PropTypes.string,
    source: PropTypes.number,
  })),
  // available_quantity: PropTypes.number,
  // sold_quantity: PropTypes.number,
  // stop_time: PropTypes.string,
  // accepts_mercadopago: PropTypes.bool,
  // currency_id: PropTypes.string,
  condition: PropTypes.string,
  address: PropTypes.string,
  shipping: PropTypes.arrayOf(PropTypes.shape({
    free_shipping: PropTypes.bool,
    mode: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    logistic_type: PropTypes.string,
    store_pick_up: PropTypes.bool,
  })),
}.isRequired;

export default ShowDetails;
