import Header from './Header';
import Main from './Main';

export default function CV({ avatarImage, handleEditAvatarClick }) {
  return (
    <div className="CV">
      <Header
        avatarImage={avatarImage}
        handleEditAvatarClick={handleEditAvatarClick}
      />
      <Main />
    </div>
  );
}
