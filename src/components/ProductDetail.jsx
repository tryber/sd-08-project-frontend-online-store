import React, { Component } from 'react';
import ProductCar from './ProductCar';
import * as api from '../services/api';

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      product: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { title } } } = this.props;   
    
    const result = await api.getProductsFromCategoryAndQuery('', title);
    console.log(result)
    
    this.setState({
      product: result,
    });      
  }

  render() {   
    const { location: { state } } = this.props;  
     
    return (
      <div data-testid="product-detail-name">
        <p>{state.title}</p>
        <img src={ state.thumbnail } alt={ state.title } />
        <p>{state.price}</p>       
        <ProductCar />
      </div>
    );
  }
}

export default ProductDetail;
