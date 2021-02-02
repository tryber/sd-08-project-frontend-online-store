import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    const { productId } = this.props;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      product: productId,
      email: '',
      number: 0,
      textarea: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.type]: event.target.value,
    });
  }

  handleSubmit() {
    const { product } = this.state;
    const getItem = sessionStorage.getItem(`${product}`);
    const { email, number, textarea } = this.state;
    const setArray = [email, number, textarea];
    if (getItem === null) {
      sessionStorage.setItem(`${product}`, JSON.stringify([setArray]));
    } else if (getItem !== null) {
      const previousData = JSON.parse(getItem);
      sessionStorage.setItem(`${product}`, JSON.stringify([previousData, setArray]));
    }
  }

  render() {
    const { product } = this.state;
    let string = JSON.parse(sessionStorage.getItem(`${product}`));
    if (string === null) string = [];
    return (
      <section>
        <form>
          <input type="email" onChange={ this.handleChange } />
          <input type="number" min="1" max="5" onChange={ this.handleChange } />
          <input
            type="textarea"
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
          />
          <button type="submit" onClick={ this.handleSubmit }>Avaliar</button>
        </form>
        { string.map((item) => (
          <article key={ item[0] }>
            <h4>{item[0]}</h4>
            <span>{`Nota:${item[1]}`}</span>
            <p>{`Comentario:${item[2]}`}</p>
          </article>
        ))}
      </section>
    );
  }
}

Rating.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Rating;
