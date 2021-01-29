import React from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.searchProducts = this.searchProducts.bind(this);
    this.returnProduct = this.returnProduct.bind(this);
  }

  searchProducts(produto) {
    const { response } = api.getProductsFromCategoryAndQuery('', produto);
    this.setState({ products: response });
  }

  returnProduct() {
    products.map((product) => <ProductCard key={ product.id } product={ product } />);
  }

  render() {
    const { products } = this.state;

    return (
      products ? this.returnProduct() : <h5>Nenhum produto foi encontrado</h5>
    );
  }
}
