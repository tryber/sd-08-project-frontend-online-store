import React from 'react';
import PropTypes from 'prop-types';

export default class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      Title: '',
      Sku: '',
      Price: '',
      Attributes: [],
      Thumbnail: '',
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  async getDetails() {
    const { match: { params: { id } } } = this.props;
    const getItemInfos = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await getItemInfos.json();
    const {
      title,
      thumbnail,
      id: sku,
      price,
      attributes,
    } = result;
    this.setState({
      Title: title,
      Sku: sku,
      Price: price,
      Attributes: attributes,
      Thumbnail: thumbnail,
    });
  }

  render() {
    const { Title, Sku, Price, Thumbnail, Attributes } = this.state;
    return (
      <section key={ Sku } className="product-details">
        <div className="details-cover">
          <p data-testid="product-detail-name">{Title}</p>
          <img src={ Thumbnail } alt={ Title } />
          <p>{`R$${parseFloat(Price).toFixed(2)}`}</p>
        </div>
        <div className="infos-list">
          {Attributes.map((attribute) => (
            attribute.value_name !== null
            && (
              <div className="cel-container" key={ attribute.id }>
                <div className="cel">{attribute.name}</div>
                <div className="cel">{attribute.value_name}</div>
              </div>)
          ))}
        </div>
      </section>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
