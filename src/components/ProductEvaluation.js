import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './ProductEvaluation.css';

class ProductEvaluation extends React.Component {
  render() {
    return (
      <form className="product-evaluation-container">
        <h3>Avaliação do Produto</h3>
        <Rating className="rating" name="size-large" defaultValue={ 3 } size="large" />
        <section className="evaluation-form">
          <div>
            <label htmlFor="email-field">
              E-mail
              <input id="email-field" type="email" />
            </label>
          </div>
          <div>
            <label htmlFor="evaluation">
              Avaliação
              <input
                id="evaluation"
                type="textArea"
                data-testid="product-detail-evaluation"
              />
            </label>
          </div>
        </section>
      </form>
    );
  }
}

export default ProductEvaluation;
