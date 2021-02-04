import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../components/AddToCart';
import CartButton from '../components/CartButton';

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
        <CartButton />
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
        <AddToCart
          data-testid="product-detail-add-to-cart"
          productInfos={ { id, title, amount: 1, testId: 'product-detail-add-to-cart' } }
        />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      attributes: PropTypes.shape({}).isRequired,

    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
