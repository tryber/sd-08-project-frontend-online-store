import React from 'react';

export default class Details extends React.Component {
  constructor() {
    super();
    this.getItem = this.getItem.bind(this);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.getItem(id);
  }

  async getItem(id) {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const product = await response.json();
    this.setState({
      product,
    });
  }

  render() {
    const { product: { title, price, thumbnail } } = this.state;
    return (

      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <h3>{price}</h3>
        <img src={ thumbnail } alt={ title } />

      </div>
    );
  }
}
