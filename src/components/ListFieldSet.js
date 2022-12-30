import '../styles/ListFieldSet.css';
import { humanReadable } from '../utilities';

import InputField from './InputField';

export default function ListFieldSet({ name, items, submitted, handleChange }) {
  function handleFieldSetChange(changeId) {
    return function (inputValue) {
      items.find(({ id }) => id === changeId).content = inputValue;
      handleChange(items);
    };
  }

  return (
    <div className="field-set list">
      <label>{humanReadable(name)}</label>
      <ul>
        {items.map(({ id, content }) => (
          <li key={id}>
            <InputField
              value={content}
              submitted={submitted}
              handleChange={handleFieldSetChange(id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
