import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // const { id } = this.props;
  //   console.log(this.props);
  //   // this.state = { load: true };
  // }

  render() {
    // const { id } = this.props;
    // console.log(id);
    // const { } = this.props;
    const { location: { state: { id, title, thumbnail, price, attributes,
      // available_quantity, sold_quantity, stop_time, condition, accepts_mercadopago,
      // currency_id, address, shipping
    } } } = this.props;
    // const { id,
    //   title, thumbnail, price, attributes, available_quantity, sold_quantity, stop_time, condition, accepts_mercadopago, currency_id,
    //   address, shipping } = this.props.location.state;
    console.log(this.props);
    return (
      <section data-testid="product-detail-name">
        <img src={ thumbnail } alt={ title } />
        <h3>{price}</h3>
        <p>
          {
            attributes.map((att) => (
              <li key={ id }>
                <span key={ id }>{title}</span>
                <span key={ id }>{att.id}</span>
                <span key={ id }>{att.name}</span>
              </li>))
          }
        </p>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
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
      address: PropTypes.shape({
        state_id: PropTypes.string,
        state_name: PropTypes.string,
        city_id: PropTypes.string,
        city_name: PropTypes.string,
      }),
      shipping: PropTypes.shape({
        free_shipping: PropTypes.bool,
        mode: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        logistic_type: PropTypes.string,
        store_pick_up: PropTypes.bool,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
