import SimpleEntry from './SimpleEntry';

export default function SkillsAndCertificationsEntry({
  content,
  handleDelete,
  enableAll,
  disableAll,
}) {
  return (
    <h3>
      <SimpleEntry
        content={content}
        handleDelete={handleDelete}
        enableAll={enableAll}
        disableAll={disableAll}
      />
    </h3>
  );
}
