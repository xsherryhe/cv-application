import '../styles/Main.css';

import Education from './Education';
import Work from './Work';
import SkillsAndCertifications from './SkillsAndCertifications';
import HonorsAndAwards from './HonorsAndAwards';

export default function Main({ enableAll, disableAll }) {
  return (
    <main>
      <Education enableAll={enableAll} disableAll={disableAll} />
      <Work enableAll={enableAll} disableAll={disableAll} />
      <SkillsAndCertifications enableAll={enableAll} disableAll={disableAll} />
      <HonorsAndAwards enableAll={enableAll} disableAll={disableAll} />
    </main>
  );
}
