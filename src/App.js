import React, { Component } from 'react';
import './styles/App.css';

import CV from './components/CV';
import ImageUpload from './components/ImageUpload';
import witterel from './images/Witterel.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { imageUploadOn: false, avatarImage: witterel };
    this.self = React.createRef();

    ['showImageUpload', 'hideImageUpload', 'updateAvatarImage'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  showImageUpload() {
    this.setState({ imageUploadOn: true });
  }

  hideImageUpload() {
    this.setState({ imageUploadOn: false });
  }

  updateAvatarImage(avatarImageSrc) {
    this.hideImageUpload();
    this.setState({ avatarImage: avatarImageSrc });
  }

  render() {
    const { imageUploadOn, avatarImage } = this.state;
    return (
      <div className="App" ref={this.self}>
        <CV
          avatarImage={avatarImage}
          handleEditAvatarClick={this.showImageUpload}
        />
        {imageUploadOn && (
          <ImageUpload
            startImage={avatarImage}
            imageName="Avatar"
            parentHeight={this.self.current.clientHeight}
            handleClose={this.hideImageUpload}
            handleSubmit={this.updateAvatarImage}
          />
        )}
      </div>
    );
  }
}
