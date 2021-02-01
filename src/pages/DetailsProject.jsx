import React from 'react';
import * as api from '../services/api';

class DetailsProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    api.getProductsFromCategoryAndQuery('', '', id)
      .then((resolve) => {
        this.setState({ product: resolve });
      });
  }

  render() {
    const { product } = this.state;
    const { title, price, pictures, attributes } = product;
    const data = Object.values({ ...attributes });
    const img = Object.values({ ...pictures });
    return (
      <section>
        <div>
          <img
            src={ img.filter((e, index) => index === 0)
              .map((e) => e.url) }
            alt="foto"
          />
        </div>
        <div>
          <h3 data-testid="product-detail-name">{title}</h3>
        </div>
        <div>
          <span>{price}</span>
        </div>
        <div>
          <table>
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
      </section>
    );
  }
}

DetailsProject.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DetailsProject;
