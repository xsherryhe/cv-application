import '../styles/entry.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DateRange from './DateRange';
import List from './List';

export default function WorkEntry({ sample }) {
  return (
    <div className="entry">
      <EditButton />
      <DeleteButton />
      <h3 className="main">{['The Obra Dinn', 'The Stargazer'][sample]}</h3>
      <h4>{['Captain of the Ship', 'First Mate'][sample]}</h4>
      <h4>
        <DateRange
          start={[new Date(1790, 3), new Date(1784, 7)][sample]}
          end={['Present', new Date(1790, 2)][sample]}
        />
      </h4>
      <List
        items={
          [
            [
              'Headed multiple trips around the Atlantic',
              'Responsible for everyone on the ship',
              'Thwarted at least three mutinies against myself',
              'Defeated monsters such as Krakens and Crab Soldiers',
              'Survived till the end',
            ],
            [
              'Ensured smooth sailing and crew satisfaction',
              'Traveled the seven seas',
              'Had zero incidents involving vengeful sealife or electrified ocean crystals',
            ],
          ][sample]
        }
      />
    </div>
  );
}
