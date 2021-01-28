import React from 'react';
import getProductsFromCategoryAndQuery from '../services/api';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const { query } = this.props;
    const result = getProductsFromCategoryAndQuery(query);
    this.setState({
      products: result,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        { products
          .map((product) => <ProductCard key={ product.id } product={ product } />) }
      </div>
    );
  }
}

export default ProductList;
