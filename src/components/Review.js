import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Review extends Component {
  getKeys(id) {
    const keysList = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key.includes(`review/${id}`)) {
        keysList.push(key);
      }
    }
    return keysList;
  }

  getReview(key) {
    const message = localStorage.getItem(key);
    const email = key.split('/')[2];
    return (
      <div>
        <h4>{email}</h4>
        <p>{message}</p>
      </div>
    );
  }

  sendReview(id) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const keyStorage = `review/${id}/${email}`;
    localStorage.setItem(keyStorage, message);
  }

  render() {
    const { itemId } = this.props;
    const keysList = this.getKeys(itemId);
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input type="text" id="email" placeholder="Email" />
          </label>
          <label htmlFor="message">
            <textarea
              id="message"
              data-testid="product-detail-evaluation"
              placeholder="Mensagem(opcional)"
            />
          </label>
          <button type="button" onClick={ () => this.sendReview(itemId) }>Avaliar</button>
        </form>
        { keysList.length === 0
          ? <span>Sem comentários</span>
          : keysList.map((key) => this.getReview(key)) }
      </div>
    );
  }
}

Review.propTypes = {
  itemId: PropTypes.number,
}.isRequired;

export default Review;
