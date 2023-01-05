import { useState } from 'react';
import '../styles/DateFieldSet.css';

import { humanReadable } from '../utilities';
import Error from './Error';
import InputField from './InputField';
import MonthSelectField from './MonthSelectField';
import YearInputField from './YearInputField';

export default function DateFieldSet({ name, date, submitted, handleChange }) {
  const [renderedErrors, setRenderedErrors] = useState({});

  function handleFieldSetChange(attribute) {
    return function (inputValue) {
      handleChange({ ...date, [attribute]: inputValue });
    };
  }

  function handleError(attribute) {
    return function (error) {
      setRenderedErrors({ ...renderedErrors, [attribute]: error });
    };
  }

  return (
    <div className="field-set date">
      {name && <label>{humanReadable(name)}</label>}
      <InputField
        name="present"
        type="checkbox"
        required={false}
        checked={date.present}
        submitted={submitted}
        handleChange={handleFieldSetChange('present')}
      />
      {!date.present && (
        <div className="month-and-year">
          <MonthSelectField
            value={date.month}
            submitted={submitted}
            handleChange={handleFieldSetChange('month')}
          />
          <YearInputField
            value={date.year}
            submitted={submitted}
            handleChange={handleFieldSetChange('year')}
            handleError={handleError('year')}
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
