import '../styles/Section.css';

import AddButton from './AddButton';
import uniqid from 'uniqid';

export default function Section({ name, entries }) {
  return (
    <section className={name.toLowerCase()}>
      <h2>
        {name} <AddButton />
      </h2>
      {entries.map((entry) => (
        <div key={uniqid()}>{entry}</div>
      ))}
    </section>
  );
}
