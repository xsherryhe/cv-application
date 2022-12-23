import { dateFormat } from '../utilities';

export default function DateRange({ start, end }) {
  return <span>{[start, end].map(dateFormat).join(' - ')}</span>;
}
