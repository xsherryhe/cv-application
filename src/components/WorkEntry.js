import { useState } from 'react';
import '../styles/entry.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DateRange from './DateRange';
import List from './List';
import EntryForm from './EntryForm';

export default function WorkEntry({
  values: startValues,
  handleDelete,
  disableAll,
  enableAll,
}) {
  const [values, setValues] = useState(startValues);
  const [editOn, setEditOn] = useState(false);

  function showEdit() {
    disableAll();
    setEditOn(true);
  }

  function hideEdit() {
    enableAll();
    setEditOn(false);
  }

  function updateValues(inputValues) {
    hideEdit();
    setValues(inputValues);
  }

  const [company, position, startDate, endDate, details] = Object.values(
    values
  ).map(({ value }) => value);

  return (
    <div>
      {editOn ? (
        <EntryForm
          startValues={values}
          handleClose={hideEdit}
          handleSubmit={updateValues}
        />
      ) : (
        <div className="entry">
          <EditButton handleClick={showEdit} />
          <DeleteButton handleClick={handleDelete} />
          <h3 className="main">{company}</h3>
          <h4>{position}</h4>
          <h4>
            <DateRange start={startDate} end={endDate} />
          </h4>
          <List items={details} />
        </div>
      )}
    </div>
  );
}
