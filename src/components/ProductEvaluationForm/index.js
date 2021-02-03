import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import styles from './styles.module.css';

class ProductEvaluationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
      stars: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStars = this.handleChangeStars.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleChangeStars(newRating, name) {
    this.setState({
      [name]: newRating,
    });
  }

  render() {
    const { email, message, stars } = this.state;
    const { product: { id }, handleChangeEvaluation } = this.props;
    return (
      <div className={ styles.wrapper }>
        <h2 className={ styles.title }>Avaliações</h2>
        <form
          onSubmit={ (event) => event.preventDefault() }
          className={ styles.productEvaluationForm }
        >
          <div className={ styles.row }>
            <input
              className={ styles.email }
              name="email"
              type="text"
              value={ email }
              onChange={ this.handleChange }
              placeholder="Email"
            />
            <StarRatings
              rating={ stars }
              starRatedColor="gold"
              starHoverColor="gold"
              changeRating={ this.handleChangeStars }
              numberOfStars={ 5 }
              name="stars"
            />
          </div>
          <textarea
            className={ styles.message }
            name="message"
            cols="30"
            rows="10"
            value={ message }
            placeholder="Mensagem (opicional)"
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
          />
          <button
            className={ styles.button }
            type="button"
            onClick={ () => { handleChangeEvaluation(id, this.state); } }
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

ProductEvaluationForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  handleChangeEvaluation: PropTypes.func.isRequired,
};

export default ProductEvaluationForm;
