import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { actionAdd } from '../../store/evaluation.reducer';

function ProductEvaluation(props) {
  const { productId } = props;
  const [evaluation, setEvaluation] = useState({ email: '', description: '', stars: 0 });
  const evals = useSelector((state) => state.evaluation);

  const dispatch = useDispatch();

  const handleEvalClick = () => {
    if (evaluation.email.length > 1 && evaluation.description.length > 1) {
      dispatch(actionAdd({ id: productId, ...evaluation }));
      setEvaluation({ email: '', description: '', stars: 0 });
    }
  };
  const handleChange = (e) => {
    const aux = {};
    aux[`${e.target.name}`] = e.target.value;
    setEvaluation({ ...evaluation, ...aux });
    console.log(evals);
  };

  return (
    <section className="product-evaluation">
      <h4>Faça uma avaliação do produto:</h4>
      <label htmlFor="email">
        Email:
        <input
          name="email"
          type="email"
          onChange={ handleChange }
          value={ evaluation.email }
        />
      </label>
      <span>Escreva sua avaliação do produto:</span>
      <textarea
        name="description"
        id=""
        cols="30"
        rows="5"
        data-testid="product-detail-evaluation"
        onChange={ handleChange }
        value={ evaluation.description }
      />

      <button type="button" onClick={ handleEvalClick }>
        Avaliar
      </button>
    </section>
  );
}

ProductEvaluation.propTypes = {
  productId: PropTypes.func.isRequired,
};

export default ProductEvaluation;
