import { useState } from 'react';

import Section from './Section';
import SkillsAndCertificationsEntry from './SkillsAndCertificationsEntry';
import uniqid from 'uniqid';

export default function SkillsAndCertifications({ enableAll, disableAll }) {
  const [entries, setEntries] = useState(
    [
      'Nepotism',
      'Advanced mermaid interrogation techniques',
      'Passenger safety',
      'Telling people apart based on their shoes and socks',
    ].map((content) => ({ id: uniqid(), content }))
  );

  function addEntry(inputValues) {
    setEntries([
      { content: inputValues.content.value, id: uniqid() },
      ...entries,
    ]);
  }

  function deleteEntry(deleteId) {
    return function () {
      setEntries(entries.filter(({ id }) => id !== deleteId));
    };
  }

  return (
    <Section
      name="Skills and Certifications"
      enableAll={enableAll}
      disableAll={disableAll}
      inlineForm={true}
      attributes={{ content: 'text' }}
      addEntry={addEntry}
      entries={entries.map(({ id, content }) => ({
        id,
        entry: (
          <SkillsAndCertificationsEntry
            enableAll={enableAll}
            disableAll={disableAll}
            content={content}
            handleDelete={deleteEntry(id)}
          />
        ),
      }))}
    />
  );
}
