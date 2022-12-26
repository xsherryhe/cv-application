import '../styles/Section.css';

import AddButton from './AddButton';

export default function Section({ name, entries = [] }) {
  return (
    <section className={name.toLowerCase().split(' ').join('-')}>
      <h2>
        {name} <AddButton />
      </h2>
      {entries.map(({ id, entry }) => (
        <div key={id}>{entry}</div>
      ))}
    </section>
  );
}
