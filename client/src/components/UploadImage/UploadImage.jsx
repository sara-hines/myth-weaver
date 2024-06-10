import React, { useState } from 'react';
import axios from 'axios';
import './UploadImage.css';

const UploadImage = ({ setImageUrl }) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadError, setUploadError] = useState(null); 

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setUploadSuccess(false);
        setUploadError(null); // Reset error message when a new file is selected
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        setUploading(true);

        try {
            const response = await axios.post('http://localhost:3001/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setImageUrl(response.data.url);
            setUploading(false);
            setUploadSuccess(true);
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploading(false);
            setUploadError('Error uploading file. Please try again.');
        }
    };


    return (
        <div className="upload-image-container">
            <input type="file" className='choose-file-button' onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
            {uploadSuccess && <p className='result-message'>Image uploaded successfully!</p>} {/* Display success message */}
            {uploadError && <p className="result-message">{uploadError}</p>} {/* Display error message */}
        </div>
    );
};

export default UploadImage;