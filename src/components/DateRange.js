import { format } from 'date-fns';

export default function DateRange({ start, end }) {
  return (
    <span>
      {format(start, 'MMMM uuuu')} - {format(end, 'MMMM uuuu')}
    </span>
  );
}
