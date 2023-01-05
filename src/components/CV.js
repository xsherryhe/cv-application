import { useState } from 'react';
import '../styles/CV.css';

import Header from './Header';
import Main from './Main';

export default function CV({ avatarImage, handleEditAvatarClick }) {
  const [disabled, setDisabled] = useState(false);

  function enable() {
    setDisabled(false);
  }

  function disable() {
    setDisabled(true);
  }

  return (
    <div className={`CV ${disabled ? 'disabled' : ''}`}>
      <Header
        avatarImage={avatarImage}
        handleEditAvatarClick={handleEditAvatarClick}
        enableAll={enable}
        disableAll={disable}
      />
      <Main enableAll={enable} disableAll={disable} />
    </div>
  );
}
