import React, { Component } from 'react';
import '../styles/InputField.css';

import Error from './Error';
import Label from './Label';

export default class InputField extends Component {
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
    this.props.handleChange(
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    );
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
    const { icon, name, type, value, checked, min, max, required } = this.props;
    const { renderedError } = this.state;

    return (
      <div className="field">
        {icon}
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
          ref={this.ref}
        />
        {type === 'checkbox' && name && <Label name={name} />}
        {renderedError && <Error content={renderedError} />}
      </div>
    );
  }
}

InputField.defaultProps = {
  icon: false,
  name: '',
  type: 'text',
  value: '',
  required: true,
  submitted: false,
};
