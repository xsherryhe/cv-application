import '../styles/Main.css';

import Section from './Section';
import EducationEntry from './EducationEntry';
import WorkEntry from './WorkEntry';
import SimpleEntry from './SimpleEntry';
import DatedEntry from './DatedEntry';

export default function Main() {
  return (
    <main>
      <Section name="Education" entries={[<EducationEntry />]} />
      <Section
        name="Work"
        entries={[...new Array(2)].map((_, i) => (
          <WorkEntry sample={i} />
        ))}
      />
      <Section
        name="Skills and Certifications"
        entries={[...new Array(4)].map((_, i) => (
          <SimpleEntry sample={i} />
        ))}
      />
      <Section
        name="Honors and Awards"
        entries={[...new Array(2)].map((_, i) => (
          <DatedEntry sample={i} />
        ))}
      />
    </main>
  );
}
