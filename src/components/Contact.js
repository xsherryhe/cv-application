import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import SimpleEntry from './SimpleEntry';

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
          <SimpleEntry content={emailContent} inputType="email" />
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} />
          <SimpleEntry content={phoneContent} inputType="tel" />
        </div>
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          <SimpleEntry content={addressContent} />
        </div>
      </h2>
    </div>
  );
}
