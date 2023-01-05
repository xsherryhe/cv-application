import { useState, useRef } from 'react';

import Button from './Button';
import Error from './Error';

export default function FileField({ content, fileType, handleChange }) {
  const [error, setError] = useState('');
  const fileTypeReg = useRef(
    {
      'image/*': /\.(jpg|jpeg|png|svg|gif)$/i,
    }[fileType]
  );

  const fileInput = useRef();

  function handleSelectFileClick(e) {
    e.preventDefault();
    fileInput.current.click();
  }

  function handleFileChange(e) {
    const fileTypeMatch = fileTypeReg.current.test(e.target.value);

    setError(fileTypeMatch ? '' : 'Invalid file type!');
    if (fileTypeMatch) handleChange(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="field">
      <Button content={content} handleClick={handleSelectFileClick} />
      <input
        className="hidden"
        type="file"
        accept={fileType}
        onChange={handleFileChange}
        ref={fileInput}
      />
      {error && <Error content={error} />}
    </div>
  );
}
