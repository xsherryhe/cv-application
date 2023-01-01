import { Component } from 'react';
import '../styles/CV.css';

import Header from './Header';
import Main from './Main';

export default class CV extends Component {
  constructor(props) {
    super(props);

    this.state = { disabled: false };
    ['enable', 'disable'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  enable() {
    this.setState({ disabled: false });
  }

  disable() {
    this.setState({ disabled: true });
  }

  render() {
    const { avatarImage, handleEditAvatarClick } = this.props;
    const { disabled } = this.state;
    return (
      <div className={`CV ${disabled ? 'disabled' : ''}`}>
        <Header
          avatarImage={avatarImage}
          handleEditAvatarClick={handleEditAvatarClick}
          enableAll={this.enable}
          disableAll={this.disable}
        />
        <Main enableAll={this.enable} disableAll={this.disable} />
      </div>
    );
  }
}
