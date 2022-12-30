import React, { Component } from 'react';
import '../styles/InputField.css';

import Error from './Error';
import Label from './Label';

export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '', renderedError: '' };

    ['handleChange'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  handleChange(e) {
    e.target.checkValidity();
    this.setState({ error: e.target.validationMessage });
    this.props.handleChange(
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    );
  }

  componentDidUpdate() {
    const { submitted } = this.props;
    const { error, renderedError } = this.state;
    if (submitted && error !== renderedError)
      this.setState({ renderedError: error });
  }

  render() {
    const { name, type, value, checked, min, max, required } = this.props;
    const { renderedError } = this.state;

    return (
      <div className="field">
        {!(type === 'checkbox') && name && <Label name={name} />}
        <input
          type={type}
          id={name}
          value={value}
          checked={checked}
          min={min}
          max={max}
          onChange={this.handleChange}
          required={required}
        />
        {type === 'checkbox' && name && <Label name={name} />}
        {renderedError && <Error content={renderedError} />}
      </div>
    );
  }
}

InputField.defaultProps = {
  name: '',
  type: 'text',
  value: '',
  required: true,
  submitted: false,
};
