import '../styles/Header.css';

import Avatar from './Avatar';
import Name from './Name';
import Contact from './Contact';

export default function Header({
  avatarImage,
  handleEditAvatarClick,
  enableAll,
  disableAll,
}) {
  return (
    <header>
      <Avatar
        image={avatarImage}
        handleEditAvatarClick={handleEditAvatarClick}
      />
      <Name enableAll={enableAll} disableAll={disableAll} />
      <Contact enableAll={enableAll} disableAll={disableAll} />
    </header>
  );
}
