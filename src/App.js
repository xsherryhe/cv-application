import { Component } from 'react';
import './styles/App.css';

import CV from './components/CV';
import ImageUpload from './components/ImageUpload';
import witterel from './images/Witterel.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { imageUploadOn: false };

    ['showImageUpload', 'hideImageUpload'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  showImageUpload() {
    this.setState({ imageUploadOn: true });
  }

  hideImageUpload() {
    this.setState({ imageUploadOn: false });
  }

  render() {
    return (
      <div className="App">
        <CV
          avatarImage={witterel}
          handleEditAvatarClick={this.showImageUpload}
        />
        {this.state.imageUploadOn && (
          <ImageUpload
            startImage={witterel}
            imageName="Avatar"
            handleCloseClick={this.hideImageUpload}
          />
        )}
      </div>
    );
  }
}
