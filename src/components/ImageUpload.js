import { Component } from 'react';
import '../styles/ImageUpload.css';

import FileButton from './FileButton';
import CloseButton from './CloseButton';
import Button from './Button';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { image: this.props.startImage };

    ['updateImage', 'handleSubmit'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  updateImage(imageSrc) {
    this.setState({ image: imageSrc });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.image);
  }

  render() {
    const { imageName, parentHeight, handleCloseClick } = this.props;
    const { image } = this.state;
    return (
      <div className="image-upload" style={{ minHeight: `${parentHeight}px` }}>
        <form action="" onSubmit={this.handleSubmit}>
          <CloseButton handleClick={handleCloseClick} />
          <h1>{imageName}</h1>
          <img src={image} alt="" />
          <FileButton
            content={`Select New ${imageName}`}
            handleChange={this.updateImage}
          />
          <Button type="submit" content="Submit" />
        </form>
      </div>
    );
  }
}
