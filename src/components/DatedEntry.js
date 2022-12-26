import { dateFormat } from '../utilities';
import SimpleEntry from './SimpleEntry';

export default function DatedEntry({ content, date, handleDelete = false }) {
  return (
    <SimpleEntry
      content={`${content} - ${dateFormat(date)}`}
      handleDelete={handleDelete}
    />
  );
}
