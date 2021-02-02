import React from 'react';

class ShowProducts extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="show-products">
        {products.map((product) => (
          <div key={ product.id } data-testid="product">
            <p>{product.title}</p>
            <img src={ `${product.thumbnail}` } alt={ product.title } />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ShowProducts;
