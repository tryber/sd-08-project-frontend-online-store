import React from 'react';
import ReactStars from 'react-stars';

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

export default ProductEvaluation;
