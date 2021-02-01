import React from 'react';
import PropTypes from 'prop-types';

export default class Details extends React.Component {
  constructor() {
    super();
    this.getItem = this.getItem.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      product: {},
      rating: 1,
      comment: '',
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

  updateState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { product: { title, price, thumbnail }, rating, comment } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <h3>{price}</h3>
        <img src={ thumbnail } alt={ title } />
        <form>
          <label htmlFor="rating">
            Rating:
            <input
              onChange={ this.updateState }
              name="rating"
              value={ rating }
              type="number"
              min={ 1 }
              max={ 5 }
            />
          </label>
          <label htmlFor="comment">
            Comments:
            <textarea
              onChange={ this.updateState }
              data-testid="product-detail-evaluation"
              value={ comment }
              name="comment"
            />
          </label>
          <button type="button" onClick={ this.addRating }>Submit</button>
        </form>
        <ol />
      </div>
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
