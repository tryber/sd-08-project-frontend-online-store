import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductsReview from '../../components/ProductsReview';

import styles from './styles.module.css';
import { BackButton } from '../../components';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      consumerInfoInputs: [
        { name: 'name', label: 'Nome', testid: 'checkout-fullname' },
        { name: 'cpf', label: 'CPF', testid: 'checkout-cpf' },
        { name: 'email', label: 'Email', testid: 'checkout-email' },
        { name: 'telefone', label: 'Telefone', testid: 'checkout-phone' },
        { name: 'cep', label: 'CEP', testid: 'checkout-cep' },
        { name: 'endereco', label: 'Endereço', testid: 'checkout-address' },
        { name: 'complemento', label: 'Complemento' },
        { name: 'numero', label: 'Número' },
        { name: 'cidade', label: 'Cidade' },
        { name: 'estado', label: 'Estado' },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderInput(name, label, type = 'text', testid) {
    return (
      <label htmlFor={ name }>
        { label }
        <input
          data-testid={ testid || '' }
          id={ name }
          name={ name }
          type={ type }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderConsumerInfo() {
    const { consumerInfoInputs } = this.state;
    return (
      <fieldset className={ styles.consumerInfo }>
        <legend>Informações do Comprador</legend>
        { consumerInfoInputs.map(({ name, label, type, testid }, index) => (
          <React.Fragment key={ index }>
            { this.renderInput(name, label, type, testid) }
          </React.Fragment>
        )) }
      </fieldset>
    );
  }

  renderPaymentMethods() {
    return (
      <fieldset className={ styles.paymentMethods }>
        <legend>Método de Pagamento</legend>
        <div className={ styles.radioGroup }>
          <label htmlFor="paymentMethod-1" name="paymentMethod">
            <input
              id="paymentMethod-1"
              name="paymentMethod"
              type="radio"
              value="Boleto"
            />
            Boleto
          </label>
          <label htmlFor="paymentMethod-2" name="paymentMethod">
            <input
              id="paymentMethod-2"
              name="paymentMethod"
              type="radio"
              value="Visa"
            />
            Visa
          </label>
          <label htmlFor="paymentMethod-3" name="paymentMethod">
            <input
              id="paymentMethod-3"
              name="paymentMethod"
              type="radio"
              value="MasterCard"
            />
            MasterCard
          </label>
          <label htmlFor="paymentMethod-4" name="paymentMethod">
            <input
              id="paymentMethod-4"
              name="paymentMethod"
              type="radio"
              value="Elo"
            />
            Elo
          </label>
        </div>
      </fieldset>
    );
  }

  render() {
    const { cart, handleIncrease, handleDecrease, handleRemove } = this.props;
    return (
      <div className={ styles.checkout }>
        <BackButton />
        <ProductsReview
          cart={ cart }
          handleIncrease={ handleIncrease }
          handleDecrease={ handleDecrease }
          handleRemove={ handleRemove }
        />
        <form
          className={ styles.checkoutForm }
          onSubmit={ (event) => event.preventDefault() }
        >
          { this.renderConsumerInfo() }
          { this.renderPaymentMethods() }
          <button className={ styles.button } type="button">Comprar</button>
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.shape({
    item: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      id: PropTypes.string,
    }),
    quantity: PropTypes.number,
  }).isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Checkout;
