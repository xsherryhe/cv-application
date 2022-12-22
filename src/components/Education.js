import '../styles/section.css';

import EducationEntry from './EducationEntry';
import AddButton from './AddButton';

export default function Education() {
  return (
    <section className="education">
      <h2>
        Education <AddButton />
      </h2>
      <EducationEntry />
    </section>
  );
}
