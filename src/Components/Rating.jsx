import React, { Component } from "react";

class Rating extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      textarea: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    // console.log(target.value);
    // console.log(this.state);
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  fillEmailText(email, onEmailChange) {
    return (
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
        />
      </label>
    );
  }

  fillTextArea(text, ontextChange) {
    return (
      <label htmlFor="textarea">
        <input
          id="textarea"
          type="textarea"
          name="textarea"
          value={text}
          onChange={ontextChange}
        />
      </label>
    );
  }

  render() {
    const { email, textarea } = this.state;
    const { handleChange } = this;
    console.log(email);
    return (
      <div>
        <h3>Avaliações</h3>
        <form>
          {this.fillEmailText(email, handleChange)}
          {this.fillTextArea(textarea, handleChange)}
          <button type="button" onClick={this.submitRatig}>
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

export default Rating;
