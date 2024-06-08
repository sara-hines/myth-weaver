import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STORIES } from '../../utils/queries';
import { Link } from 'react-router-dom';
import './MythIndex.css';

const MythIndex = () => {
    // Apollo Client query to fetch stories
    const { loading, data, error } = useQuery(GET_STORIES);
    const stories = data?.stories || {};

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    if (error) {
        return <h2>Error loading stories</h2>;
    }

    const renderStars = (averageRating) => {
        const stars = [];
        for (let i = 0; i < averageRating; i++) {
            stars.push(<span key={i}>★</span>);
        }
        return stars;
    };

    return (
        <div className="mythweaver">
            <main className="main-content">
                <div className="story-grid">
                    {stories.map((story, index) => (
                        <Link to={`/story-index/${story._id}`} key={story._id}>
                            <div className={`story-container story story-${index + 1} heartbeat`}>
                                <p className='story-title'>{story.title}</p>
                                <p className='story-author'>Created by {story.author}</p>
                                <p className='story-description'>{story.description}</p>
                                <div className='story-image-wrapper'>
                                    <img className='story-image' src={story.imageUrl} alt={story.title} />
                                </div>
                                {story.reviews?.length === 0 || !story?.reviews ? (
                                    <p>No ratings yet!</p>
                                ) : (
                                    <>
                                        {renderStars(story.averageRating)}
                                        <p>Rated {story.averageRating} stars on average by {story.ratingsCount} people.</p>
                                    </>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default MythIndex;
