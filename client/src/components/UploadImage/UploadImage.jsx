import React, { useState } from 'react';
import axios from 'axios';
import './UploadImage.css';

// When creating a story, the UploadImage component is used to upload the user's image and display feedback on the upload status.
const UploadImage = ({ setImageUrl }) => {
  // State to store the selected file
  const [file, setFile] = useState(null);
  // State to track the uploading status
  const [uploading, setUploading] = useState(false);
  // State to indicate a successful upload
  const [uploadSuccess, setUploadSuccess] = useState(false);
  // State to store any upload errors
  const [uploadError, setUploadError] = useState(null);

  // Handle file input change, storing the selected file in state and resetting upload success status and any error message.
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadSuccess(false);
    setUploadError(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    // Create a new FormData object.
    const formData = new FormData();
    // Append the selected file to the form data.
    formData.append('file', file);

    // Set uploading status to true
    setUploading(true);

    try {
      // Send a POST request to upload the file.
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // If the upload is successful, update the image URL and set success status.
      setImageUrl(response.data.url);
      setUploading(false);
      setUploadSuccess(true);
    } catch (error) {
      // If there is an error during the upload, log it and set the error state.
      console.error('Error uploading file:', error);
      setUploading(false);
      setUploadError('Error uploading file. Please try again.');
    }
  };

  return (
    <div className='upload-image-container'>
      {/* 'Choose File' button/input element to choose a file */}
      <input type='file' className='choose-file-button' onChange={handleFileChange} />

      <div className='flex-upload-container'>
        {/* 'Upload Image' button which changes to display 'Uploading' while uploading is taking place. */}
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>

        {/* Display success message */}
        {uploadSuccess && <p className='result-message'>Image uploaded successfully!</p>}

        {/* Display error message if needed. */}
        {uploadError && <p className='result-message'>{uploadError}</p>}
      </div>
    </div>
  );
};

export default UploadImage;