import '../styles/Education.css';

import EducationEntry from './EducationEntry';
import AddButton from './AddButton';

export default function Education() {
  return (
    <div className="education">
      <h2>
        Education <AddButton />
      </h2>
      <EducationEntry />
    </div>
  );
}
