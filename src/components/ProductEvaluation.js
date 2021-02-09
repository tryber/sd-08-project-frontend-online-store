import React from 'react';
// import { FaStar } from '@react-icons/all-files/fa/FaStar';

export default class ProductEvaluation extends React.Component {
  toColor(event) {
    switch (event.target.id || event.target.parentElement.id) {
    case 'star1':
      document.getElementById('star1').classList.add('shine');
      break;
    case 'star2':
      document.getElementById('star1').classList.add('shine');
      document.getElementById('star2').classList.add('shine');
      break;
    case 'star3':
      document.getElementById('star1').classList.add('shine');
      document.getElementById('star2').classList.add('shine');
      document.getElementById('star3').classList.add('shine');
      break;
    case 'star4':
      document.getElementById('star1').classList.add('shine');
      document.getElementById('star2').classList.add('shine');
      document.getElementById('star3').classList.add('shine');
      document.getElementById('star4').classList.add('shine');
      break;
    case 'star5':
      document.getElementById('star1').classList.add('shine');
      document.getElementById('star2').classList.add('shine');
      document.getElementById('star3').classList.add('shine');
      document.getElementById('star4').classList.add('shine');
      document.getElementById('star5').classList.add('shine');
      break;
    default:
      break;
    }
  }

  clear() {
    document.getElementById('star1').classList.remove('shine');
    document.getElementById('star2').classList.remove('shine');
    document.getElementById('star3').classList.remove('shine');
    document.getElementById('star4').classList.remove('shine');
    document.getElementById('star5').classList.remove('shine');
  }

  rate() {
    const evaluation = {
      email: document.getElementById('email').value,
      messege: document.getElementById('messege').value,
      stars: document.getElementsByClassName('shine').length,
    };
    const index = (sessionStorage.length) + 1;

    sessionStorage.setItem(index, JSON.stringify(evaluation));
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <legend className="white-text">Avaliações</legend>
            <label htmlFor="evaluationEmail" className="white-text">
              E-mail:
              <input type="email" maxLength="30" id="email" name="evaluationEmail" />
            </label>
            <div>
              <button type="button" id="star1" onClick={ this.toColor }>*</button>
              <button type="button" id="star2" onClick={ this.toColor }>*</button>
              <button type="button" id="star3" onClick={ this.toColor }>*</button>
              <button type="button" id="star4" onClick={ this.toColor }>*</button>
              <button type="button" id="star5" onClick={ this.toColor }>*</button>
              <button type="button" onClick={ this.clear }>Limpar</button>
            </div>
            <label htmlFor="evaluationTextArea" className="white-text">
              Mensagem:
              <textarea
                name="evaluationTextArea"
                maxLength="200"
                rows="4"
                cols="45"
                id="messege"
                data-testid="product-detail-evaluation"
              />
            </label>
            <button type="button" onClick={ this.rate }>Avaliar</button>
            <button type="reset" onClick={ this.clear }>Apagar</button>
          </fieldset>
        </form>
        <section />
      </>
    );
  }
}
