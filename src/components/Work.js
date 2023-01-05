import { useState, useRef } from 'react';

import Section from './Section';
import WorkEntry from './WorkEntry';
import uniqid from 'uniqid';

export default function Work({ enableAll, disableAll }) {
  const attributes = useRef({
    company: 'text',
    position: 'text',
    startDate: 'date',
    endDate: 'date',
    details: 'list',
  });

  const [entries, setEntries] = useState(
    [
      {
        company: 'The Obra Dinn',
        position: 'Captain of the Ship',
        startDate: { month: 3, year: 1790, present: false },
        endDate: { month: null, year: null, present: true },
        details: [
          { content: 'Headed multiple trips around the Atlantic' },
          { content: 'Responsible for everyone on the ship' },
          { content: 'Thwarted at least three mutinies against myself' },
          { content: 'Defeated monsters such as Krakens and Crab Soldiers' },
          { content: 'Survived till the end' },
        ].map((detail) => ({ ...detail, id: uniqid() })),
      },
      {
        company: 'The Stargazer',
        position: 'First Mate',
        startDate: { month: 7, year: 1784, present: false },
        endDate: { month: 2, year: 1790, present: false },
        details: [
          { content: 'Ensured smooth sailing and crew satisfaction' },
          { content: 'Traveled the seven seas' },
          {
            content:
              'Had zero incidents involving vengeful sealife or electrified ocean crystals',
          },
        ].map((detail) => ({ ...detail, id: uniqid() })),
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
      name="Work"
      enableAll={enableAll}
      disableAll={disableAll}
      attributes={attributes.current}
      addEntry={addEntry}
      entries={entries.map((entry) => ({
        id: entry.id,
        entry: (
          <WorkEntry
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
