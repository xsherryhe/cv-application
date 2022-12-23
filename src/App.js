import './styles/App.css';

import CV from './components/CV';
import ImageUpload from './components/ImageUpload';
import witterel from './images/Witterel.png';

function App() {
  return (
    <div className="App">
      <CV avatarImage={witterel} />
      <ImageUpload startImage={witterel} imageName="Avatar" />
    </div>
  );
}

export default App;
