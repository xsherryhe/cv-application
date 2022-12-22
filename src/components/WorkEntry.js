import '../styles/entry.css';

import EditButton from './EditButton';
import DateRange from './DateRange';

export default function WorkEntry() {
  return (
    <div className="entry">
      <EditButton />
      <h3>The Obra Dinn</h3>
      <h4>Captain of the Ship</h4>
      <h4>
        <DateRange start={new Date(1784, 7)} end="Present" />
      </h4>
      <ul>
        <li>Headed multiple trips around the Atlantic.</li>
        <li>Responsible for everyone on the ship.</li>
        <li>Stopped at least three mutinies.</li>
        <li>Defeated monsters such as Krakens and Crab Soldiers.</li>
      </ul>
    </div>
  );
}
