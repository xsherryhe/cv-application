import { useState, useRef } from 'react';

import Section from './Section';
import EducationEntry from './EducationEntry';
import uniqid from 'uniqid';

export default function Education({ enableAll, disableAll }) {
  const attributes = useRef({
    school: 'text',
    major: 'text',
    gpa: 'text',
    startDate: 'date',
    endDate: 'date',
  });

  const [entries, setEntries] = useState(
    [
      {
        school: 'Beast Naval Academy',
        major: 'Siren Studies',
        gpa: '4.0 / 4.0',
        startDate: { month: 7, year: 1780, present: false },
        endDate: { month: 5, year: 1784, present: false },
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
      name="Education"
      enableAll={enableAll}
      disableAll={disableAll}
      attributes={attributes.current}
      addEntry={addEntry}
      entries={entries.map((entry) => ({
        id: entry.id,
        entry: (
          <EducationEntry
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
