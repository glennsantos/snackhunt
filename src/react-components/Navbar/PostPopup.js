import React from 'react';
import Popup from './Popup';

class PostPopup extends React.Component {
  handlePost = () => {

  };
  render() {
    return (
      <Popup {...this.props} style="post-popup">
        <header className="post-header">Post a new product</header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input placeholder="Enter product name"></input></td>
              </tr>
              <tr>
                <td>Description</td>
                <td><input placeholder="Enter product description"></input></td>
              </tr>
              <tr>
                <td>Website</td>
                <td><input placeholder="http://www..."></input></td>
              </tr>
              <tr>
                <td>Media</td>
                <td><input placeholder="Paste a direct link to an image"></input></td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer className="post-footer">
          <button onClick={this.handlePost} className="post-btn">Hunt it!</button>
        </footer>
      </Popup>
    );
  }
}

export default PostPopup;
