import '../styles/ImageUpload.css';

import Button from './Button';

export default function ImageUpload({ startImage, imageName }) {
  return (
    <div className="image-upload">
      <form action="">
        <h1>{imageName}</h1>
        <img src={startImage} alt="" />
        <Button content={`Select New ${imageName}`} />
        <input className="hidden" type="file" name="image" id="image" />
      </form>
    </div>
  );
}
