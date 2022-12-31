import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
export default function AddButton({ handleClick }) {
  return (
    <Button
      content={<FontAwesomeIcon icon={faPlus} />}
      className="add icon"
      handleClick={handleClick}
    />
  );
}
