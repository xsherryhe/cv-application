import '../styles/DateFieldSet.css';

import { humanReadable } from '../utilities';
import InputField from './InputField';
import MonthSelectField from './MonthSelectField';
import YearInputField from './YearInputField';

export default function DateFieldSet({ name, date, submitted, handleChange }) {
  function handleFieldSetChange(attribute) {
    return function (inputValue) {
      handleChange({ ...date, [attribute]: inputValue });
    };
  }

  return (
    <div className="field-set date">
      <label>{humanReadable(name)}</label>
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
          />
        </div>
      )}
    </div>
  );
}
