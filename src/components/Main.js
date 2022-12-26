import '../styles/Main.css';

import Education from './Education';
import Work from './Work';
import SkillsAndCertifications from './SkillsAndCertifications';
import HonorsAndAwards from './HonorsAndAwards';

export default function Main() {
  return (
    <main>
      <Education />
      <Work />
      <SkillsAndCertifications />
      <HonorsAndAwards />
    </main>
  );
}
