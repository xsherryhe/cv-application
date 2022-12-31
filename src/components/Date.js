import { dateFormat } from '../utilities';

export default function DateComponent({ date }) {
  const { year, month, present } = date;
  return (
    <span>
      {present
        ? 'Present'
        : !(typeof month === 'number' || /^\d+$/.test(month))
        ? year
        : dateFormat(new Date(year, month))}
    </span>
  );
}
