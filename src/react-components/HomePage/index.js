import React from 'react';
import ProductList from '../Product/ProductList';
import * as firebase from 'firebase';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: []
    }
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC1cirj1iG-VMLLAMoj9jN87kASbNfihXU",
      authDomain: "snackhunt-5d80c.firebaseapp.com",
      databaseURL: "https://snackhunt-5d80c.firebaseio.com/",
      storageBucket: "snackhunt-5d80c.appspot.com",
    };
    firebase.initializeApp(config);

    var db = firebase.database();
    var firebaseRef = db.ref("/products");
    firebaseRef.on("value",(snapshot) =>{
      var products = snapshot.val();
      this.setState({
        productList: products
      })
    });

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
