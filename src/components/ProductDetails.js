import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location: { product } } = this.props;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div className="product-details" data-testid="product-detail-name">
        <h1>{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <div>
          <h3>Especificações tecnicas</h3>
          <ul>
            {attributes.map(({ id, value_name: value, name }) => (
              <li key={ id }>
                { `${name} : ${value}`}
              </li>))}
          </ul>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
