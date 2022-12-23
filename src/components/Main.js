import '../styles/Main.css';

import Section from './Section';
import EducationEntry from './EducationEntry';
import WorkEntry from './WorkEntry';

export default function Main() {
  return (
    <main>
      <Section name="Education" entries={[<EducationEntry />]} />
      <Section
        name="Work"
        entries={[<WorkEntry sample={0} />, <WorkEntry sample={1} />]}
      />
    </main>
  );
}
