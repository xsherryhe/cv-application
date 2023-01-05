import { useState } from 'react';
import '../styles/EntryForm.css';

import InputField from './InputField';
import CloseButton from './CloseButton';
import SubmitButton from './SubmitButton';
import Button from './Button';
import DateFieldSet from './DateFieldSet';
import ListFieldSet from './ListFieldSet';

export default function EntryForm({
  startValues,
  inline = false,
  short = false,
  icon,
  handleClose,
  handleSubmit,
}) {
  const [inputValues, setInputValues] = useState(startValues);
  const [submitted, setSubmitted] = useState(false);

  function updateInput(attribute) {
    return function (inputValue) {
      setInputValues({
        ...inputValues,
        [attribute]: { ...inputValues[attribute], value: inputValue },
      });
      setSubmitted(false);
    };
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (e.target.checkValidity()) handleSubmit(inputValues);
    else setSubmitted(true);
  }

  return (
    <form
      noValidate
      className={`entry-form ${inline ? 'inline' : short ? 'short' : ''}`}
      action=""
      onSubmit={handleFormSubmit}
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
                handleChange={updateInput(attribute)}
              />
            ),
            list: (
              <ListFieldSet
                key={attribute}
                name={inline || short ? '' : attribute}
                items={value}
                submitted={submitted}
                handleChange={updateInput(attribute)}
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
              handleChange={updateInput(attribute)}
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
