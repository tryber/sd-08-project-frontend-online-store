import React from 'react';
import './Avaliacoes.css';
import PropTypes from 'prop-types';

class Avaliacoes extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      message: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendAvaliations = this.sendAvaliations.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  sendAvaliations() {
    const { updateAvaliations } = this.props;
    const { value, message, email } = this.state;
    const newAvaliation = { value, message, email };
    updateAvaliations(newAvaliation);
  }

  mountAvaliation(aval, index) {
    return (
      <>
        <div key={ index } className="comment-box">
          <div>
            <span>
              {aval.email}
              {aval.value}
              *
            </span>
          </div>
          <span>{aval.message}</span>
        </div>
        <hr className="divider" />
      </>
    );
  }

  render() {
    const { avaliations } = this.props;
    return (
      <div className="avaliation-container">
        <div className="new-avaliation-container">
          <form className="form-avaliacoes">
            <div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={ this.handleChange }
              />
              <input
                type="number"
                placeholder="Avaliação"
                max="5"
                min="0"
                name="value"
                onChange={ this.handleChange }
              />
            </div>
            <textarea
              placeholder="Mensagem (opcional)"
              name="message"
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
            />
            <button type="button" onClick={ this.sendAvaliations }>
              Avaliar
            </button>
          </form>
        </div>
        <div className="comments">
          {avaliations.map((aval, index) => this.mountAvaliation(aval, index))}
        </div>
      </div>
    );
  }
}

Avaliacoes.propTypes = {
  avaliations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  updateAvaliations: PropTypes.func.isRequired,
};

export default Avaliacoes;
