import '../styles/Name.css';

import SimpleEntry from './SimpleEntry';

export default function Name({ content = 'Captain Robert Witterel' }) {
  return (
    <h1 className="name">
      <SimpleEntry content={content} />
    </h1>
  );
}
