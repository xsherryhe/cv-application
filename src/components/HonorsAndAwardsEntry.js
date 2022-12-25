import DatedEntry from './DatedEntry';

export default function HonorsAndAwardsEntry({
  sample,
  startContent = '',
  startDate = new Date(),
}) {
  return (
    <h3>
      <DatedEntry
        startContent={
          [
            'Most Detailed Insurance Log Award',
            'Best Leader of a Fictional Ship Award',
          ]?.[sample] || startContent
        }
        startDate={
          [new Date(1808, 1), new Date(2018, 9)]?.[sample] || startDate
        }
        deletable={true}
      />
    </h3>
  );
}
