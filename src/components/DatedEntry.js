import { dateFormat } from '../utilities';
import SimpleEntry from './SimpleEntry';

export default function DatedEntry({ sample }) {
  return (
    <SimpleEntry
      content={[
        ['Most Detailed Insurance Log Award', dateFormat(new Date(1808, 2))],
        [
          'Best Leader of a Fictional Ship Award',
          dateFormat(new Date(2018, 10)),
        ],
      ][sample].join(' - ')}
    />
  );
}
