import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
export default function CloseButton({ handleClick }) {
  return (
    <Button
      content={<FontAwesomeIcon icon={faXmark} />}
      className="close icon"
      handleClick={handleClick}
    />
  );
}
