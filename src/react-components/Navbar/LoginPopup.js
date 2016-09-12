import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component {
  render() {
    return (
      <Popup {...this.props} style="login-popup">
        <img src="/img/kitty.png" />
        <h1>Join The Community of Snack Lovers</h1>
        <p>Let's talk about snacks! Nomnomnommms.</p>
        <button className="facebook-btn">Login with Facebook</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
