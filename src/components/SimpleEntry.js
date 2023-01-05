import { useState } from 'react';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EntryForm from './EntryForm';

export default function SimpleEntry({
  icon = false,
  content: startContent,
  inputType = 'text',
  handleDelete = false,
  disableAll,
  enableAll,
}) {
  const [values, setValues] = useState({
    content: { value: startContent, type: inputType },
  });
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

  return (
    <div>
      {editOn ? (
        <EntryForm
          inline={true}
          icon={icon}
          startValues={values}
          handleClose={hideEdit}
          handleSubmit={updateValues}
        />
      ) : (
        <div className="entry">
          <div className="main">
            {icon} {values.content.value}
          </div>
          <EditButton handleClick={showEdit} />
          {handleDelete && <DeleteButton handleClick={handleDelete} />}
        </div>
      )}
    </div>
  );
}
