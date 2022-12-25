import '../styles/entry.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DateRange from './DateRange';

export default function EducationEntry() {
  return (
    <div className="entry">
      <EditButton />
      <DeleteButton />
      <h3 className="main">Beast Naval Academy</h3>
      <h4>Major: Siren Studies</h4>
      <h4>GPA: 4.0 / 4.0</h4>
      <h4>
        <DateRange start={new Date(1780, 7)} end={new Date(1784, 5)} />
      </h4>
    </div>
  );
}
