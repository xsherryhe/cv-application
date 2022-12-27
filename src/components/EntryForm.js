import { Component } from 'react';
import '../styles/EntryForm.css';

import InputField from './InputField';
import SubmitButton from './SubmitButton';
import Button from './Button';
import DateFieldSet from './DateFieldSet';

export default class EntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValues: this.props.startValues, submitted: false };

    ['updateInput', 'handleSubmit'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  updateInput(attribute) {
    return function (inputValue) {
      const { inputValues } = this.state;
      inputValues[attribute].value = inputValue;
      this.setState({ inputValues, submitted: false });
    }.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.checkValidity())
      this.props.handleSubmit(this.state.inputValues);
    else this.setState({ submitted: true });
  }

  render() {
    const { inline } = this.props;
    const { inputValues, submitted } = this.state;
    return (
      <form
        noValidate
        className={inline ? 'inline' : ''}
        action=""
        onSubmit={this.handleSubmit}
      >
        {Object.entries(inputValues).map(
          ([attribute, { value, type }]) =>
            ({
              date: (
                <DateFieldSet
                  key={attribute}
                  name={attribute}
                  date={value}
                  submitted={submitted}
                  handleChange={this.updateInput(attribute)}
                />
              ),
            }[type] || (
              <InputField
                key={attribute}
                name={inline ? '' : attribute}
                type={type}
                value={value}
                submitted={submitted}
                handleChange={this.updateInput(attribute)}
              />
            ))
        )}
        {inline ? (
          <SubmitButton />
        ) : (
          <div className="submit">
            <Button type="submit" content="Submit" />
          </div>
        )}
      </form>
    );
  }
}
