import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_STORIES } from '../../utils/queries';
import { Link } from 'react-router-dom';
import './MythIndex.css';

const MythIndex = () => {
    const { loading, data, error } = useQuery(GET_STORIES);
    const stories = data?.stories || [];

    if (loading) {
        return (
            <div className="mythweaver">
                <main className="main-content">
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <h2>Loading...</h2>
                    </div>
                </main>
            </div> 
        );
    }

    if (error) {
        return (
            <div className="mythweaver">
                <main className="main-content">
                    <div className="error-container">
                        <h2>Error loading stories</h2>
                    </div>
                </main>
            </div>
        );
    }

    const handleImageError = (event) => {
        event.target.src = '/path/to/default-image.jpg'; // Fallback image URL
    };

    return (
        <div className="mythweaver">
            <main className="main-content">
                <div className="story-grid">
                    {stories.map((story, index) => (
                        <Link to={`/story-index/${story._id}`} key={story._id}>
                            <div className={`story-container story`}>
                                <div className='story-image-wrapper'>
                                    <img className='story-image' src={story.imageUrl} alt={story.title} onError={handleImageError} />
                                </div>
                                <div className="story-title-container">
                                    <p className='story-title'>{story.title}</p>
                                </div>
                                <div className="story-info">
                                    <p className='story-description'>{story.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MythIndex;
