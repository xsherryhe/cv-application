import '../styles/Name.css';

import SimpleEntry from './SimpleEntry';

export default function Name({
  content = 'Captain Robert Witterel',
  enableAll,
  disableAll,
}) {
  return (
    <h1 className="name">
      <SimpleEntry
        content={content}
        enableAll={enableAll}
        disableAll={disableAll}
      />
    </h1>
  );
}
