import React, { Component } from 'react';

import Error from './Error';

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
    this.props.handleChange(e.target.value);
  }

  componentDidUpdate() {
    const { submitted } = this.props;
    const { error, renderedError } = this.state;
    if (submitted && error !== renderedError)
      this.setState({ renderedError: error });
  }

  render() {
    const { type, value } = this.props;
    const { renderedError } = this.state;

    return (
      <div className="field">
        <input
          type={type}
          value={value}
          onChange={this.handleChange}
          required
        />
        {renderedError && <Error content={renderedError} />}
      </div>
    );
  }
}

InputField.defaultProps = { type: 'text', value: '', submitted: false };
