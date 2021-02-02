import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import styles from './styles.module.css';

class ProductEvaluations extends Component {
  render() {
    const { evaluations } = this.props;
    return (
      <div>
        { evaluations.map((evaluation, index) => {
          const { email, message, stars } = evaluation;
          return (
            <div key={ index } className={ styles.evaluation }>
              <div className={ styles.row }>
                <p className={ styles.email }>{ email }</p>
                <ReactStars
                  edit={ false }
                  count={ 5 }
                  value={ stars }
                  size={ 24 }
                  color2="#ffd700"
                />
              </div>
              <div>
                <p className={ styles.row }>{ message }</p>
              </div>
            </div>
          );
        }) }
      </div>
    );
  }
}

ProductEvaluations.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductEvaluations;
