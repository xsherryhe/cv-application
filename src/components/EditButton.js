import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
export default function EditButton({ handleClick }) {
  return (
    <Button
      content={<FontAwesomeIcon icon={faPenToSquare} />}
      className="edit icon"
      handleClick={handleClick}
    />
  );
}
