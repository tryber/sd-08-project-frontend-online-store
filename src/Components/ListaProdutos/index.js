import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import * as api from '../../services/api';
import CardProduto from '../CardProduto';

export default class ListaProdutos extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   products: [],
  //   // };

  //   // this.fetchProducts = this.fetchProducts.bind(this);
  // }

  componentDidUpdate(prevProps) {
    const { categoryId, onFetchProducts } = this.props;
    if (prevProps.categoryId !== categoryId) {
      onFetchProducts();
    }
  }

  // fetchProducts() {
  //   const { inputStatus, categoryId } = this.props;
  //   const { getProductsFromCategoryAndQuery } = api;

  //   getProductsFromCategoryAndQuery(categoryId, inputStatus)
  //     .then((data) => {
  //       this.setState({
  //         products: data.results,
  //       });
  //     });
  // }

  render() {
    const { products, onAddProductToCart } = this.props;
    const prod = products;

    return (
      <div>
        {/* <button
          type="button"
          data-testid="query-button"
          onClick={ onFetchProducts }
        >
          BUSCAR
        </button> */}
        <div className="container-product-list">
          {
            prod.map((product) => (
              <CardProduto
                key={ product.id }
                product={ product }
                onAddProductToCart={ onAddProductToCart }
              />))
          }
        </div>
      </div>
    );
  }
}

ListaProdutos.propTypes = {
  // inputStatus: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  onFetchProducts: PropTypes.func.isRequired,
  onAddProductToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
