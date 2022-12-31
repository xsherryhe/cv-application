import React, { Component } from 'react';
import '../styles/SelectField.css';
import { humanReadable } from '../utilities';

import Error from './Error';

export default class SelectField extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '', renderedError: '' };
    this.ref = React.createRef();

    ['validate', 'handleChange'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  validate(element) {
    element.checkValidity();
    this.setState({ error: element.validationMessage });
  }

  handleChange(e) {
    this.validate(e.target);
    this.props.handleChange(e.target.value);
  }

  componentDidMount() {
    this.validate(this.ref.current);
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
        <select
          id={name}
          defaultValue={value}
          onChange={this.handleChange}
          ref={this.ref}
        >
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
