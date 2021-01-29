import React, { Component } from 'react';
import * as api from '../../services/api';
import Search from '../Serach';
import './Produtos.css';

export default class Produtos extends Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
    };
  }

  async componentDidMount() {
    const data = await api.getProductsFromCategoryAndQuery();
    this.getProdutos(data.results);
  }

  getProdutos(data) {
    this.setState({
      produtos: data,
    });
  }

  render() {
    const { produtos } = this.state;
    return (
      <div className="produtos-container">
        <Search />
        {produtos.map((item) => (
          <div className="produtos-card" data-testid="product" key={ item.id }>
            <img src={ item.thumbnail } alt={ item.title } />
            <p className="produtos-title">{item.title}</p>
            <p className="produtos-price">{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

// accepts_mercadopago: true
// address: {state_id: "BR-SP", state_name: "São Paulo", city_id: "BR-SP-29", city_name: "Sorocaba"}
// attributes: (4) [{…}, {…}, {…}, {…}]
// available_quantity: 500
// buying_mode: "buy_it_now"
// catalog_product_id: null
// category_id: "MLB9206"
// condition: "new"
// currency_id: "BRL"
// differential_pricing: {id: 33580182}
// domain_id: "MLB-MUGS"
// id: "MLB1531444547"
// installments: {quantity: 6, amount: 6.65, rate: 0, currency_id: "BRL"}
// listing_type_id: "gold_pro"
// official_store_id: null
// order_backend: 43
// original_price: null
// permalink: "https://produto.mercadolivre.com.br/MLB-1531444547-caneca-magica-personalizada-com-nome-por-onde-for-quero-ser-_JM"
// price: 39.9
// prices: {id: "MLB1531444547", prices: Array(1), presentation: {…}, payment_method_prices: Array(0)}
// sale_price: null
// seller: {id: 515662184, permalink: "http://perfil.mercadolivre.com.br/DURAN+SHOP", registration_date: "2020-01-17T21:27:03.000-04:00", car_dealer: false, real_estate_agency: false, …}
// seller_address: {id: "", comment: "", address_line: "", zip_code: "", country: {…}, …}
// shipping: {free_shipping: false, mode: "me2", tags: Array(0), logistic_type: "cross_docking", store_pick_up: false}
// site_id: "MLB"
// sold_quantity: 500
// stop_time: "2040-05-16T04:00:00.000Z"
// tags: (8) ["brand_verified", "good_quality_picture", "good_quality_thumbnail", "loyalty_discount_eligible", "immediate_payment", "cart_eligible", "shipping_guaranteed", "best_seller_candidate"]
// thumbnail: "http://mlb-s2-p.mlstatic.com/680805-MLB41908240476_052020-I.jpg"
// thumbnail_id: "680805-MLB41908240476_052020"
// title: "Caneca Mágica Personalizada Com Nome Por Onde For Quero Ser"
