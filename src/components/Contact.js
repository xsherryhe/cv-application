import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import EditButton from './EditButton';

export default function Contact() {
  return (
    <div className="contact">
      <h2>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="text">rwitterel@obra.dinn</span>
          <EditButton />
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} />
          <span className="text">1-800-CAPTAIN</span>
          <EditButton />
        </div>
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="text">1807 Obra Dinn, Atlantic Ocean, World</span>
          <EditButton />
        </div>
      </h2>
    </div>
  );
}
