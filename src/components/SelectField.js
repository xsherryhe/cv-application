import React, { Component } from 'react';
import '../styles/SelectField.css';
import { humanReadable } from '../utilities';

import Error from './Error';

export default class SelectField extends Component {
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
    const { name, value, options, required } = this.props;
    const { renderedError } = this.state;

    return (
      <div className="field">
        {name && <label htmlFor={name}>{humanReadable(name)}</label>}
        <select id={name} defaultValue={value} onChange={this.handleChange}>
          {!required && <option value="">--</option>}
          {options.map((content, i) => (
            <option key={i} value={i}>
              {content}
            </option>
          ))}
        </select>
        {renderedError && <Error content={renderedError} />}
      </div>
    );
  }
}

SelectField.defaultProps = { options: [], submitted: false };
