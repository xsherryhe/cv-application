import { useState } from 'react';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EntryForm from './EntryForm';
import DateComponent from './Date';

export default function HonorsAndAwardsEntry({
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

  const [content, date] = Object.values(values).map(({ value }) => value);
  return (
    <div>
      {editOn ? (
        <EntryForm
          short={true}
          startValues={values}
          handleClose={hideEdit}
          handleSubmit={updateValues}
        />
      ) : (
        <div className="entry">
          <h3 className="main">
            {content}
            <span className="main-detail">
              {' '}
              - <DateComponent date={date} />
            </span>
          </h3>
          <EditButton handleClick={showEdit} />
          {handleDelete && <DeleteButton handleClick={handleDelete} />}
        </div>
      )}
    </div>
  );
}
