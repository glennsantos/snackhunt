import React from 'react';
import ProductList from '../Product/ProductList';
import * as firebase from 'firebase';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: []
    }
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className="container">
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList} />
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
