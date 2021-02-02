import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';
import AddToCart from './AddToCart';
// import * as api from '../services/api';

class ProductDetail extends React.Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(prop) {
    console.log(prop);
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { productprop } = product;
    const { attributes } = productprop;
    return (
      <section className="DetailContainer">
        <section>
          <h2 data-testid="product-detail-name">
            {productprop.title}
          </h2>
          <h3>
            R$
            {productprop.price.toFixed(2)}
          </h3>
          <AddToCart prop={ productprop } />
        </section>
        <section>
          <h1>Especificações</h1>
          <section>
            {attributes.map((espec) => (
              <li key={ espec.value_id }>
                {espec.name}
                {' : '}
                {espec.value_name}
              </li>
            ))}
          </section>
        </section>
      </section>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
  product: PropTypes.objectOf(PropTypes.object).isRequired,
  productprop: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProductDetail;
