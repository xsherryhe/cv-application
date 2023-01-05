import { useState } from 'react';
import '../styles/Section.css';

import AddButton from './AddButton';
import EntryForm from './EntryForm';

export default function Section({
  name,
  attributes,
  entries = [],
  inlineForm = false,
  shortForm = false,
  addEntry,
  disableAll,
  enableAll,
}) {
  const [newOn, setNewOn] = useState(false);

  function showNew() {
    disableAll();
    setNewOn(true);
  }

  function hideNew() {
    enableAll();
    setNewOn(false);
  }

  function handleAdd(inputValues) {
    hideNew();
    addEntry(inputValues);
  }

  return (
    <section className={name.toLowerCase().split(' ').join('-')}>
      <h2>
        {name} <AddButton handleClick={showNew} />
      </h2>
      {newOn && (
        <div>
          <EntryForm
            inline={inlineForm}
            short={shortForm}
            startValues={Object.entries(attributes).reduce(
              (attributes, [attribute, type]) => ({
                ...attributes,
                [attribute]: {
                  value:
                    {
                      date: { month: '', year: new Date().getFullYear() },
                      list: [],
                    }[type] || '',
                  type,
                },
              }),
              {}
            )}
            handleClose={hideNew}
            handleSubmit={handleAdd}
          />
        </div>
      )}
      {entries.map(({ id, entry }) => (
        <div key={id}>{entry}</div>
      ))}
    </section>
  );
}
