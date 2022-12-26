import '../styles/entry.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DateRange from './DateRange';

export default function EducationEntry({
  school,
  major,
  gpa,
  startDate,
  endDate,
  handleDelete,
}) {
  return (
    <div className="entry">
      <EditButton />
      <DeleteButton handleClick={handleDelete} />
      <h3 className="main">{school}</h3>
      <h4>Major: {major}</h4>
      <h4>GPA: {gpa}</h4>
      <h4>
        <DateRange start={startDate} end={endDate} />
      </h4>
    </div>
  );
}
