import '../styles/ImageUpload.css';

import Button from './Button';
import CloseButton from './CloseButton';

export default function ImageUpload({
  startImage,
  imageName,
  handleCloseClick,
}) {
  return (
    <div className="image-upload">
      <form action="">
        <CloseButton handleClick={handleCloseClick} />
        <h1>{imageName}</h1>
        <img src={startImage} alt="" />
        <Button content={`Select New ${imageName}`} />
        <input className="hidden" type="file" name="image" id="image" />
      </form>
    </div>
  );
}
