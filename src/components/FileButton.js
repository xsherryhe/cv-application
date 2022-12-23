import React, { Component } from 'react';

import Button from './Button';

export default class FileButton extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();

    ['handleSelectImageClick', 'handleImageChange'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  handleSelectImageClick(e) {
    e.preventDefault();
    this.fileInputRef.current.click();
  }

  handleImageChange(e) {
    const imageSrc = URL.createObjectURL(e.target.files[0]);
    this.props.handleChange(imageSrc);
  }

  render() {
    const { content } = this.props;
    return (
      <div className="file-selection">
        <Button content={content} handleClick={this.handleSelectImageClick} />
        <input
          className="hidden"
          type="file"
          name="image"
          id="image"
          onChange={this.handleImageChange}
          ref={this.fileInputRef}
        />
      </div>
    );
  }
}
