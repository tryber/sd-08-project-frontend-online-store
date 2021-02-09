import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  errorMessage() {
    return (
      <section className="main-container sec-products products-error">
        <h3>Nenhum produto foi encontrado</h3>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }

  renderResults(results) {
    const { onAddCart } = this.props;
    return (
      <section className="main-container sec-products">
        {results.map((product) => {
          const {
            id,
            title,
            price,
            thumbnail,
            attributes,
            available_quantity: availableQuantity,
          } = product;
          return (
            <ProductCard
              key={ id }
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
              availableQuantity={ availableQuantity }
              attributes={ attributes }
              onAddCart={ onAddCart }
            />
          );
        })}
      </section>
    );
  }

  render() {
    const { results } = this.props;
    return (
      <section>
        {results[0] ? this.renderResults(results) : this.errorMessage()}
      </section>
    );
  }
}

ProductList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddCart: PropTypes.func.isRequired,
};

export default ProductList;
