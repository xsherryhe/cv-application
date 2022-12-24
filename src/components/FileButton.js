import React, { Component } from 'react';

import Button from './Button';

export default class FileButton extends Component {
  constructor(props) {
    super(props);
    this.fileTypeReg = {
      'image/*': /\.(jpg|jpeg|png|svg|gif)$/i,
    }[this.props.fileType];
    this.fileInputRef = React.createRef();
    this.state = { valid: true };

    ['handleSelectFileClick', 'handleFileChange'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  handleSelectFileClick(e) {
    e.preventDefault();
    this.fileInputRef.current.click();
  }

  handleFileChange(e) {
    const { validate, handleChange } = this.props;
    const fileTypeMatch = this.fileTypeReg.test(e.target.value);

    validate(fileTypeMatch ? '' : 'Invalid file type!');
    if (!fileTypeMatch) return;

    const file = URL.createObjectURL(e.target.files[0]);
    handleChange(file);
  }

  render() {
    const { content, fileType } = this.props;
    return (
      <div className="file-selection">
        <Button content={content} handleClick={this.handleSelectFileClick} />
        <input
          className="hidden"
          type="file"
          accept={fileType}
          onChange={this.handleFileChange}
          ref={this.fileInputRef}
        />
      </div>
    );
  }
}
