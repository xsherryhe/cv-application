import '../styles/Name.css';

import SimpleEntry from './SimpleEntry';

export default function Name({ startContent = 'Captain Robert Witterel' }) {
  return (
    <h1 className="name">
      <SimpleEntry startContent={startContent} />
    </h1>
  );
}
