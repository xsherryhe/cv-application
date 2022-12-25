import React, { Component } from 'react';

import Button from './Button';
import Error from './Error';

export default class FileField extends Component {
  constructor(props) {
    super(props);
    this.fileTypeReg = {
      'image/*': /\.(jpg|jpeg|png|svg|gif)$/i,
    }[this.props.fileType];
    this.fileInputRef = React.createRef();
    this.state = { error: '' };

    ['handleSelectFileClick', 'handleFileChange'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  handleSelectFileClick(e) {
    e.preventDefault();
    this.fileInputRef.current.click();
  }

  handleFileChange(e) {
    const { handleChange } = this.props;
    const fileTypeMatch = this.fileTypeReg.test(e.target.value);

    this.setState({ error: fileTypeMatch ? '' : 'Invalid file type!' });
    if (fileTypeMatch) handleChange(URL.createObjectURL(e.target.files[0]));
  }

  render() {
    const { content, fileType } = this.props;
    const { error } = this.state;
    return (
      <div className="field">
        <Button content={content} handleClick={this.handleSelectFileClick} />
        <input
          className="hidden"
          type="file"
          accept={fileType}
          onChange={this.handleFileChange}
          ref={this.fileInputRef}
        />
        {error && <Error content={error} />}
      </div>
    );
  }
}
