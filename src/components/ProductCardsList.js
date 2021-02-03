import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductCardsList extends React.Component {
  render() {
    const { productList } = this.props;
    const { onClick } = this.props;
    return (
      <section className="product-list">
        {productList.map((item) => (
          <ProductCard card={ item } key={ item.id } onClick={ onClick } />
        ))}
      </section>
    );
  }
}

ProductCardsList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
