import '../styles/Avatar.css';
import witterel from '../images/Witterel.png';

import EditButton from './EditButton';

export default function Avatar({ image = witterel }) {
  return (
    <div className="avatar">
      <img src={image} alt="Avatar" />
      <EditButton />
    </div>
  );
}
