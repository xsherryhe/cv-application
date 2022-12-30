export default function List({ items }) {
  return (
    <ul>
      {items.map(({ id, content }) => (
        <li key={id}>{content}</li>
      ))}
    </ul>
  );
}
