import '../styles/Header.css';

import Avatar from './Avatar';
import Name from './Name';
import Contact from './Contact';

export default function Header({ avatarImage, handleEditAvatarClick }) {
  return (
    <header>
      <Avatar
        image={avatarImage}
        handleEditAvatarClick={handleEditAvatarClick}
      />
      <Name />
      <Contact />
    </header>
  );
}
