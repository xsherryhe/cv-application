import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
export default function SubmitButton({ handleClick }) {
  return (
    <Button
      content={<FontAwesomeIcon icon={faCircleCheck} />}
      type="submit"
      className="submit icon"
      handleClick={handleClick}
    />
  );
}
