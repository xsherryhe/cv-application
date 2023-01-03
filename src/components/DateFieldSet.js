import { Component } from 'react';
import '../styles/DateFieldSet.css';

import { humanReadable } from '../utilities';
import Error from './Error';
import InputField from './InputField';
import MonthSelectField from './MonthSelectField';
import YearInputField from './YearInputField';

export default class DateFieldSet extends Component {
  constructor(props) {
    super(props);

    this.state = { renderedErrors: {} };

    ['handleChange', 'handleError'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  handleChange(attribute) {
    const { date, handleChange } = this.props;
    return function (inputValue) {
      handleChange({ ...date, [attribute]: inputValue });
    };
  }

  handleError(attribute) {
    const { renderedErrors } = this.state;
    return function (error) {
      this.setState({
        renderedErrors: { ...renderedErrors, [attribute]: error },
      });
    }.bind(this);
  }

  render() {
    const { name, date, submitted } = this.props;
    const { renderedErrors } = this.state;

    return (
      <div className="field-set date">
        {name && <label>{humanReadable(name)}</label>}
        <InputField
          name="present"
          type="checkbox"
          required={false}
          checked={date.present}
          submitted={submitted}
          handleChange={this.handleChange('present')}
        />
        {!date.present && (
          <div className="month-and-year">
            <MonthSelectField
              value={date.month}
              submitted={submitted}
              handleChange={this.handleChange('month')}
            />
            <YearInputField
              value={date.year}
              submitted={submitted}
              handleChange={this.handleChange('year')}
              handleError={this.handleError('year')}
            />
          </div>
        )}
        {Object.entries(renderedErrors)
          .filter(([attribute, error]) => error)
          .map(([attribute, error]) => (
            <Error
              key={attribute}
              content={`${humanReadable(attribute)}: ${error}`}
            />
          ))}
      </div>
    );
  }
}
