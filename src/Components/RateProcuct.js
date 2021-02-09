import React, { Component } from 'react';
import ReactStars from 'react-stars';

class RateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textEmail: '',
      rating: 0,
      textArea: '',
    };
  }

  render() {
    const { textEmail, textArea, rating } = this.state;
    return (
      <section>
        <h3>Avaliações</h3>
        <form>
          <div>
            <input
              className="rate-email"
              name="email"
              type="email"
              placeholder="Email"
              defaultValue={ textEmail }
            />
            <ReactStars
              className="react-stars"
              count={ 5 }
              size={ 28 }
              color="#ffd700"
              defaultValue={ rating }
            />
          </div>
          <div>
            <textarea
              type="text"
              data-testid="product-detail-evaluation"
              placeholder="Deixe sua mensagem"
              defaultValue={ textArea }
            />
            <button type="submit">Avalie</button>
          </div>
        </form>
      </section>
    );
  }
}

export default RateProduct;
