import uniqid from 'uniqid';

export default function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={uniqid()}>{item}</li>
      ))}
    </ul>
  );
}
