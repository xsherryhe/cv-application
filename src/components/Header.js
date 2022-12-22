import '../styles/Header.css';

import Avatar from './Avatar';
import Name from './Name';
import Contact from './Contact';

export default function Header({ avatarImage }) {
  return (
    <header>
      <Avatar image={avatarImage} />
      <Name />
      <Contact />
    </header>
  );
}
