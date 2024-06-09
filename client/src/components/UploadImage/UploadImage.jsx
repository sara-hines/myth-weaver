import React, { useState } from 'react';
import axios from 'axios';
import './UploadImage.css';

const UploadImage = ({ setImageUrl }) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
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
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploading(false);
        }
    };
    

    return (
        <div className="upload-image-container">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
        </div>
    );
};

export default UploadImage;
