import DateComponent from './Date';

export default function DateRange({ start, end }) {
  return (
    <span>
      <DateComponent date={start} /> - <DateComponent date={end} />
    </span>
  );
}
