import { format } from 'date-fns';

export default function DateRange({ start, end }) {
  return (
    <span>
      {[start, end]
        .map((date) =>
          date instanceof Date ? format(date, 'MMMM uuuu') : date
        )
        .join(' - ')}
    </span>
  );
}
