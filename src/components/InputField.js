import { useState, useRef, useEffect } from 'react';
import '../styles/InputField.css';
import { humanReadable } from '../utilities';

import Error from './Error';
import Label from './Label';

export default function InputField({
  icon = false,
  name = '',
  type = 'text',
  value = '',
  checked,
  min,
  max,
  required = true,
  handleChange,
  handleError = false,
  submitted = false,
}) {
  const [error, setError] = useState('');
  const [renderedError, setRenderedError] = useState('');
  const input = useRef();

  function handleFieldChange(e) {
    handleChange(
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    );
  }

  useEffect(() => {
    input.current.checkValidity();
    setError(input.current.validationMessage);
  }, [value, checked, min, max, required]);

  useEffect(() => {
    if (submitted && error !== renderedError) {
      if (handleError) handleError(error);
      setRenderedError(error);
    }
  }, [error, renderedError, submitted, handleError]);

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
        onChange={handleFieldChange}
        required={required}
        ref={input}
      />
      {type === 'checkbox' && name && <Label name={name} />}
      {renderedError && !handleError && (
        <Error
          content={`${name ? humanReadable(name) + ': ' : ''}${renderedError}`}
        />
      )}
    </div>
  );
}
