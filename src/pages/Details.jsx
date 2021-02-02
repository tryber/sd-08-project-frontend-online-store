import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class DetailsPage extends React.Component {
  render() {
    const { location: { product } } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div>
        <Link to="/" data-testid="product-detail-link">Home</Link>
        <p>{id}</p>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ `${thumbnail}` } alt="" />
        <p>{price}</p>
      </div>
    );
  }
}

DetailsPage.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default DetailsPage;
