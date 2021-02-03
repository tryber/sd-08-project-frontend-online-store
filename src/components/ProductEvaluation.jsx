import React from 'react';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';

class ProductEvaluation extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {
      stars,
      handleChangeStars,
      titleEvaluation,
      evaluationDescription,
      handleChange,
      onClickSaveEval,
    } = this.props;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input
              value={ titleEvaluation }
              type="text"
              name="titleEvaluation"
              onChange={ handleChange }
            />
          </div>
          <div>
            <ReactStars
              name="stars"
              count={ 5 }
              value={ stars }
              onChange={ handleChangeStars }
              size={ 40 }
              color2="#ffd700"
            />
          </div>
          <div>
            <textarea
              data-testid="product-detail-evaluation"
              value={ evaluationDescription }
              name="evaluationDescription"
              onChange={ handleChange }
            />
          </div>
          <div>
            <button onClick={ onClickSaveEval } type="submit">Salvar</button>
          </div>
        </form>
      </div>
    );
  }
}

ProductEvaluation.propTypes = {
  stars: PropTypes.number,
  handleChangeStars: PropTypes.func.isRequired,
  titleEvaluation: PropTypes.string.isRequired,
  evaluationDescription: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onClickSaveEval: PropTypes.func.isRequired,
};

ProductEvaluation.defaultProps = {
  stars: 0,
};

export default ProductEvaluation;
