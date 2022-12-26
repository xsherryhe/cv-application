import DatedEntry from './DatedEntry';

export default function HonorsAndAwardsEntry({
  content = '',
  date = new Date(),
  handleDelete,
}) {
  return (
    <h3>
      <DatedEntry content={content} date={date} handleDelete={handleDelete} />
    </h3>
  );
}
