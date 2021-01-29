import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetail: {},
    }
  }

  async getProductDetails() {
    const { match: { params: { id } } } = this.props;
    const { location: { state: { productInfo: { querySearched, category } } } } = this.props;
    const product = await getProductsFromCategoryAndQuery(category, querySearched);
    const productResult = product.find((product) => product.results.id === id);
    this.setState({
      productDetail: productResult,
    })
    console.log(querySearched, category);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  render() {
    const { productDetail: { title, price, thumbnail, attributes } } = this.state;

    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title }></img>
        <ul>
          {attributes.map((attribute) => <li>{`${attribute.name}: ${attribute.name_value}`}</li>)}
        </ul>
        <span>{`R$${price}`}</span>
      </div>
    );
  }

}

export default ProductDetails;
