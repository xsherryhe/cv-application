import SimpleEntry from './SimpleEntry';

export default function SkillsAndCertificationsEntry({
  content,
  handleDelete,
}) {
  return (
    <h3>
      <SimpleEntry content={content} handleDelete={handleDelete} />
    </h3>
  );
}
