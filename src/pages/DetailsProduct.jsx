import React from 'react';
import PropTypes from 'prop-types';
import { localStorageSave, lsSaveEvaluationProduct } from '../localStorage';
import { BtnShoppingCart, ProductEvaluation, EvaluationHistory } from '../components';

class DetailsProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleEvaluation: '',
      evaluationDescription: '',
      stars: 0,
    };
    this.handleChangeStars = this.handleChangeStars.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClickSaveEval = this.onClickSaveEval.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleChangeStars(stars) {
    this.setState({ stars });
  }

  onClickSaveEval() {
    const { titleEvaluation, evaluationDescription, stars } = this.state;
    const { location: { state: { product } } } = this.props;
    const { id } = product;
    const results = {
      title: titleEvaluation,
      describe: evaluationDescription,
      rating: stars,
    };
    lsSaveEvaluationProduct('evalProduct', id, results);
  }

  renderMainProducts(data, product) {
    const { title, thumbnail, price } = product;
    return (
      <>
        <div className="product-img">
          <img src={ thumbnail.replace('I', 'O') } alt="foto" />
          <BtnShoppingCart />
        </div>
        <div className="detail-name">
          <h3 data-testid="product-detail-name">{title}</h3>
        </div>
        <div className="price-label">
          <span>{`R$ ${price.toFixed(2)}`}</span>
        </div>
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => localStorageSave('shoppingCart', product, product.id) }
          >
            Adicionar ao carrinho
          </button>
        </div>
        {this.renderAttributesProduct(data)}
      </>
    );
  }

  renderAttributesProduct(data) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Especificações técnicas</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((attribute, index) => (
              <tr key={ index }>
                <td>{attribute.name}</td>
                <td>{Object.values({ ...attribute.values }).map((e) => e.name)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { attributes } = product;
    const data = Object.values({ ...attributes });
    const { titleEvaluation, evaluationDescription, stars } = this.state;
    return (
      <main>
        <section className="product-details">
          {this.renderMainProducts(data, product)}
        </section>
        <aside>
          <ProductEvaluation
            titleEvaluation={ titleEvaluation }
            evaluationDescription={ evaluationDescription }
            handleChangeStars={ this.handleChangeStars }
            stars={ stars }
            handleChange={ this.handleChange }
            onClickSaveEval={ this.onClickSaveEval }
          />
        </aside>
        <aside>
          <EvaluationHistory />
        </aside>
      </main>
    );
  }
}

DetailsProject.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default DetailsProject;
