import { useState, useRef } from 'react';

import Section from './Section';
import HonorsAndAwardsEntry from './HonorsAndAwardsEntry';
import uniqid from 'uniqid';

export default function HonorsAndAwards({ enableAll, disableAll }) {
  const attributes = useRef({ content: 'text', date: 'date' });
  const [entries, setEntries] = useState(
    [
      {
        content: 'Most Detailed Insurance Log Award',
        date: { year: 1808, month: 1 },
      },
      {
        content: 'Best Leader of a Fictional Ship Award',
        date: { year: 2018, month: 9 },
      },
    ].map((entry) => ({ ...entry, id: uniqid() }))
  );

  function addEntry(inputValues) {
    const newEntry = Object.entries(inputValues).reduce(
      (entry, [attribute, { value }]) => ({ ...entry, [attribute]: value }),
      { id: uniqid() }
    );
    setEntries([newEntry, ...entries]);
  }

  function deleteEntry(deleteId) {
    return function () {
      setEntries(entries.filter(({ id }) => id !== deleteId));
    };
  }

  return (
    <Section
      name="Honors and Awards"
      enableAll={enableAll}
      disableAll={disableAll}
      shortForm={true}
      attributes={attributes.current}
      addEntry={addEntry}
      entries={entries.map((entry) => ({
        id: entry.id,
        entry: (
          <HonorsAndAwardsEntry
            enableAll={enableAll}
            disableAll={disableAll}
            values={Object.entries(attributes.current).reduce(
              (attributes, [attribute, type]) => ({
                ...attributes,
                [attribute]: { value: entry[attribute], type },
              }),
              {}
            )}
            handleDelete={deleteEntry(entry.id)}
          />
        ),
      }))}
    />
  );
}
