import '../styles/entry.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DateRange from './DateRange';
import List from './List';

export default function WorkEntry({
  company,
  position,
  startDate,
  endDate,
  details,
}) {
  return (
    <div className="entry">
      <EditButton />
      <DeleteButton />
      <h3 className="main">{company}</h3>
      <h4>{position}</h4>
      <h4>
        <DateRange start={startDate} end={endDate} />
      </h4>
      <List items={details} />
    </div>
  );
}
