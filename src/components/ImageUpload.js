import { useState } from 'react';
import '../styles/ImageUpload.css';

import FileField from './FileField';
import CloseButton from './CloseButton';
import Button from './Button';

export default function ImageUpload({
  startImage,
  imageName,
  parentHeight,
  handleClose,
  handleSubmit,
}) {
  const [image, setImage] = useState(startImage);

  function updateImage(imageSrc) {
    setImage(imageSrc);
  }

  function handleUploadSubmit(e) {
    e.preventDefault();
    handleSubmit(image);
  }

  return (
    <div className="image-upload" style={{ minHeight: `${parentHeight}px` }}>
      <form action="" onSubmit={handleUploadSubmit}>
        <CloseButton handleClick={handleClose} />
        <h1>{imageName}</h1>
        <img src={image} alt="" />
        <FileField
          content={`Select New ${imageName}`}
          handleChange={updateImage}
          fileType="image/*"
        />
        <Button type="submit" content="Submit" />
      </form>
    </div>
  );
}
