import { Component } from 'react';
import '../styles/SingleInputForm.css';

import InputField from './InputField';
import SubmitButton from './SubmitButton';

export default class SingleInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: this.props.startValue, submitted: false };

    ['updateInput', 'handleSubmit'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  updateInput(inputValue) {
    this.setState({ inputValue, submitted: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.checkValidity())
      this.props.handleSubmit(this.state.inputValue);
    else this.setState({ submitted: true });
  }

  render() {
    const { inputValue, submitted } = this.state;
    return (
      <form
        noValidate
        className="single-input"
        action=""
        onSubmit={this.handleSubmit}
      >
        <InputField
          type="text"
          value={inputValue}
          submitted={submitted}
          handleChange={this.updateInput}
        />
        <SubmitButton />
      </form>
    );
  }
}
