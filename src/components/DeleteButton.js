import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
export default function DeleteButton({ handleClick }) {
  return (
    <Button
      content={<FontAwesomeIcon icon={faCircleMinus} />}
      className="delete icon"
      handleClick={handleClick}
    />
  );
}
