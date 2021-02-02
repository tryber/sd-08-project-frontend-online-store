import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../css/Card.css';

class Main extends React.Component {
  render() {
    const { listProducts, handleChangeClickBuyProduct } = this.props;
    if (listProducts.length === 0) {
      return (
        <>
          <h1 data-testid="product">Nenhum produto encontrado</h1>
          <h1 data-testid="product">{' '}</h1>
        </>
      );
    }
    return (
      <div className="cards-list" key="allProducts">
        { listProducts.map((product, index) => (
          <Card
            key={ index }
            product={ product }
            handleChangeClickBuyProduct={ handleChangeClickBuyProduct }
          />
        ))}
      </div>
    );
  }
}

Main.propTypes = {
  listProducts: PropTypes.arrayOf(PropTypes.shape()),
  handleChangeClickBuyProduct: PropTypes.func.isRequired,
};

Main.defaultProps = {
  listProducts: [],
};

export default Main;
