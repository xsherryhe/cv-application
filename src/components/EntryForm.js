import { Component } from 'react';
import '../styles/EntryForm.css';

import InputField from './InputField';
import CloseButton from './CloseButton';
import SubmitButton from './SubmitButton';
import Button from './Button';
import DateFieldSet from './DateFieldSet';
import ListFieldSet from './ListFieldSet';

export default class EntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValues: { ...this.props.startValues },
      submitted: false,
    };

    ['updateInput', 'handleSubmit'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  updateInput(attribute) {
    return function (inputValue) {
      const { inputValues } = this.state;
      inputValues[attribute] = { ...inputValues[attribute], value: inputValue };
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
    const { inline, short, icon, handleClose } = this.props;
    const { inputValues, submitted } = this.state;
    return (
      <form
        noValidate
        className={`entry-form ${inline ? 'inline' : short ? 'short' : ''}`}
        action=""
        onSubmit={this.handleSubmit}
      >
        {!inline && !short && <CloseButton handleClick={handleClose} />}
        {Object.entries(inputValues).map(
          ([attribute, { value, type }]) =>
            ({
              date: (
                <DateFieldSet
                  key={attribute}
                  name={inline || short ? '' : attribute}
                  date={value}
                  submitted={submitted}
                  handleChange={this.updateInput(attribute)}
                />
              ),
              list: (
                <ListFieldSet
                  key={attribute}
                  name={inline || short ? '' : attribute}
                  items={value}
                  submitted={submitted}
                  handleChange={this.updateInput(attribute)}
                />
              ),
            }[type] || (
              <InputField
                key={attribute}
                icon={icon}
                name={inline || short ? '' : attribute}
                type={type}
                value={value}
                submitted={submitted}
                handleChange={this.updateInput(attribute)}
              />
            ))
        )}
        {inline || short ? (
          <div className="buttons">
            <SubmitButton />
            <CloseButton handleClick={handleClose} />
          </div>
        ) : (
          <div className="submit">
            <Button type="submit" content="Submit" />
          </div>
        )}
      </form>
    );
  }
}

EntryForm.defaultProps = { inline: false, short: false };
