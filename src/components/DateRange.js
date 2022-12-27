import { dateFormat } from '../utilities';

export default function DateRange({ start, end }) {
  return (
    <span>
      {[start, end]
        .map(({ year, month, present }) => {
          if (present) return 'Present';
          if (!(typeof month === 'number' || /^\d+$/.test(month))) return year;
          return dateFormat(new Date(year, month));
        })
        .join(' - ')}
    </span>
  );
}
