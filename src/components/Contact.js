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
  enableAll,
  disableAll,
}) {
  return (
    <div className="contact">
      <h2>
        <div className="email">
          <SimpleEntry
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            content={emailContent}
            inputType="email"
            enableAll={enableAll}
            disableAll={disableAll}
          />
        </div>
        <div className="phone">
          <SimpleEntry
            icon={<FontAwesomeIcon icon={faPhone} />}
            content={phoneContent}
            inputType="tel"
            enableAll={enableAll}
            disableAll={disableAll}
          />
        </div>
        <div className="address">
          <SimpleEntry
            icon={<FontAwesomeIcon icon={faLocationDot} />}
            content={addressContent}
            enableAll={enableAll}
            disableAll={disableAll}
          />
        </div>
      </h2>
    </div>
  );
}
