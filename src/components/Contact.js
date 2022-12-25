import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import SimpleEntry from './SimpleEntry';

// TO DO: Make SingleInputForm a grid with different grid row 1 heights
export default function Contact({
  emailContent = 'rwitterel@obra.dinn',
  phoneContent = '1-800-CAPTAIN',
  addressContent = '1807 Obra Dinn, Atlantic Ocean, World',
}) {
  return (
    <div className="contact">
      <h2>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          <SimpleEntry startContent={emailContent} inputType="email" />
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} />
          <SimpleEntry startContent={phoneContent} inputType="tel" />
        </div>
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          <SimpleEntry startContent={addressContent} />
        </div>
      </h2>
    </div>
  );
}
