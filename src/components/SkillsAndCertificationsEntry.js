import SimpleEntry from './SimpleEntry';

export default function SkillsAndCertificationsEntry({
  sample,
  startContent = '',
}) {
  return (
    <h3>
      <SimpleEntry
        startContent={
          [
            'Nepotism',
            'Advanced mermaid interrogation techniques',
            'Passenger safety',
            'Telling people apart based on their shoes and socks',
          ]?.[sample] || startContent
        }
        deletable={true}
      />
    </h3>
  );
}
