import React from 'react';

class ProductForms extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputRating = this.inputRating.bind(this);
    this.inputTextarea = this.inputTextarea.bind(this);
    this.storeComment = this.storeComment.bind(this);
    this.showComments = this.showComments.bind(this);
    this.state = {
      email: '',
      rating: '',
      textarea: '',
    };
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  inputEmail() {
    const { email } = this.state;
    return (
      <input
        type="email"
        value={ email }
        name="email"
        placeholder="Email"
        required
        onChange={ this.handleChange }
      />
    );
  }

  inputRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating">
        How many stars:
        <input
          type="number"
          value={ rating }
          name="rating"
          min="1"
          max="5"
          required
          id="rating"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputTextarea() {
    const { textarea } = this.state;
    return (
      <textarea
        placeholder="Mensage (opcional)"
        value={ textarea }
        name="textarea"
        onChange={ this.handleChange }
        data-testid="product-detail-evaluation"
      />
    );
  }

  storeComment() {
    const { email, rating, textarea } = this.state;
    const comment = {
      email,
      rating,
      textarea,
    };
    let comments = [];
    const PreviousComments = JSON.parse(localStorage.getItem('comments'));
    if (PreviousComments !== null) {
      comments = [...PreviousComments, comment];
    } else {
      comments = [comment];
    }
    localStorage.setItem('comments', JSON.stringify(comments));
    this.setState({
      email: '',
      rating: '',
      textarea: '',
    });
  }

  showComments() {
    const comments = JSON.parse(localStorage.getItem('comments'));
    if (comments !== null) {
      return (
        <div>
          { comments.map((comment) => (
            <div key={ comment.email }>
              <hr />
              <p>{`${comment.email}`}</p>
              <p>{`Score: ${comment.rating}`}</p>
              {comment.textarea !== '' ? <p>{comment.textarea}</p> : <p />}
              <hr />
            </div>))}
        </div>
      );
    }
    return (
      <p>No Comments</p>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.inputEmail() }
          <br />
          { this.inputRating() }
          <br />
          { this.inputTextarea() }
          <br />
          <button type="button" onClick={ this.storeComment }>Submit</button>
        </form>
        { this.showComments() }
      </div>
    );
  }
}

export default ProductForms;
