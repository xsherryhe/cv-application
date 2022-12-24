import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

export default function SimpleEntry({ content = '', sample }) {
  return (
    <div className="entry">
      <h3>
        {[
          'Nepotism',
          'Advanced mermaid interrogation techniques',
          'Passenger safety',
          'Telling people apart based on their shoes and socks',
        ]?.[sample] || content}
      </h3>
      <EditButton />
      <DeleteButton />
    </div>
  );
}
