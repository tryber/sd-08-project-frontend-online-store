import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.formRating = this.formRating.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    const { addRating } = this.props;
    e.preventDefault();
    const { location: { product } } = this.props;
    const { id } = product;
    const { form } = e.target;
    addRating({
      id,
      rating: form[0].value,
      comment: form[1].value,
    });
  }

  formRating() {
    return (
      <form>
        <input type="number" min="1" max="5" />
        <textarea data-testid="product-detail-evaluation" />
        <button type="submit" onClick={ this.submit }>Enviar</button>
      </form>
    );
  }

  render() {
    const { location: { product }, ratings } = this.props;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div className="product-details" data-testid="product-detail-name">
        <h1>{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <div>
          <h3>Especificações tecnicas</h3>
          <ul>
            {attributes.map(({ id, value_name: value, name }) => (
              <li key={ id }>
                { `${name} : ${value}`}
              </li>))}
          </ul>
        </div>
        { this.formRating() }
        { ratings.filter(({ id }) => id === product.id).map(({ id, rating, comment }) => (
          <div key={ id }>
            <p>
              Avaliação:
              { rating }
            </p>
            <p>
              Comentário:
              { comment }
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }).isRequired,
  addRating: PropTypes.func.isRequired,
  ratings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDetails;
