import { useState, useRef, useEffect } from 'react';
import '../styles/SelectField.css';
import { humanReadable } from '../utilities';

import Error from './Error';

export default function SelectField({
  name,
  value,
  options = [],
  required,
  submitted = false,
  handleChange,
}) {
  const [error, setError] = useState('');
  const [renderedError, setRenderedError] = useState('');
  const select = useRef();

  function handleFieldChange(e) {
    handleChange(e.target.value);
  }

  useEffect(() => {
    select.current.checkValidity();
    setError(select.current.validationMessage);
  }, [value, options, required]);

  useEffect(() => {
    if (submitted && error !== renderedError) setRenderedError(error);
  }, [error, renderedError, submitted]);

  return (
    <div className="field">
      {name && <label htmlFor={name}>{humanReadable(name)}</label>}
      <select
        id={name}
        defaultValue={value}
        onChange={handleFieldChange}
        ref={select}
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
