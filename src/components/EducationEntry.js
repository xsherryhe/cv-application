import { useState } from 'react';
import '../styles/entry.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DateRange from './DateRange';
import EntryForm from './EntryForm';

export default function EducationEntry({
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

  const [school, major, gpa, startDate, endDate] = Object.values(values).map(
    ({ value }) => value
  );

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
          <h3 className="main">{school}</h3>
          <h4 className="major">Major: {major}</h4>
          <div className="gpa">GPA: {gpa}</div>
          <div className="date-range">
            <DateRange start={startDate} end={endDate} />
          </div>
        </div>
      )}
    </div>
  );
}
