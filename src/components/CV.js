import Header from './Header';
import Main from './Main';

export default function CV({ avatarImage }) {
  return (
    <div className="App">
      <Header avatarImage={avatarImage} />
      <Main />
    </div>
  );
}
