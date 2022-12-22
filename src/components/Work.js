import '../styles/section.css';

import WorkEntry from './WorkEntry';
import AddButton from './AddButton';

export default function Work() {
  return (
    <section className="work">
      <h2>
        Work <AddButton />
      </h2>
      <WorkEntry />
    </section>
  );
}
