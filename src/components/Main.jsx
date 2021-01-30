import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Main extends React.Component {
  render() {
    const { itemsProducts } = this.props;
    if (!Array.isArray(itemsProducts)) {
      return (
        <div>Vazio</div>
      );
    }
    const renderItems = itemsProducts.map((product) => (
      <Card data-testid="product" key={ product.id } product={ product } />));
    return (
      <div>
        {renderItems}
      </div>
    );
  }
}

Main.propTypes = {
  itemsProducts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
};

Main.defaultProps = {
  itemsProducts: undefined,
};

export default Main;
