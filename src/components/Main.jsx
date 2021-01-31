import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../css/Card.css';

class Main extends React.Component {
  render() {
    const { listProducts } = this.props;
    if (listProducts.length === 0) {
      return (
        <>
          <h1 data-testid="product">Vázio</h1>
          <h1 data-testid="product">{' '}</h1>
        </>
      );
    }
    return (
      <div className="cards-list" key="allProducts">
        { listProducts.map((product, index) => (
          <Card key={ index } product={ product } />
        ))}
      </div>
    );
  }
}

Main.propTypes = {
  listProducts: PropTypes.arrayOf(PropTypes.shape()),
};

Main.defaultProps = {
  listProducts: [],
};

export default Main;
