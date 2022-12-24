import { Component } from 'react';
import '../styles/ImageUpload.css';

import FileButton from './FileButton';
import CloseButton from './CloseButton';
import Button from './Button';
import Error from './Error';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { image: this.props.startImage, error: '' };

    ['validate', 'updateImage', 'handleSubmit'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  validate(error) {
    this.setState({ error });
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
    const { image, error } = this.state;
    return (
      <div className="image-upload" style={{ minHeight: `${parentHeight}px` }}>
        <form action="" onSubmit={this.handleSubmit}>
          <CloseButton handleClick={handleCloseClick} />
          <h1>{imageName}</h1>
          <img src={image} alt="" />
          <FileButton
            content={`Select New ${imageName}`}
            handleChange={this.updateImage}
            validate={this.validate}
            fileType="image/*"
          />
          {error && <Error content={error} />}
          <Button type="submit" content="Submit" />
        </form>
      </div>
    );
  }
}
