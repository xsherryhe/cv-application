import { dateFormat } from '../utilities';
import SimpleEntry from './SimpleEntry';

export default function DatedEntry({
  startContent,
  startDate,
  deletable = false,
}) {
  return (
    <SimpleEntry
      startContent={`${startContent} - ${dateFormat(startDate)}`}
      deletable={deletable}
    />
  );
}
