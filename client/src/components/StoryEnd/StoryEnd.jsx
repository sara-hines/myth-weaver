import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './StoryEnd.css';

const StoryEnd = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { storyName, storyImage, storyDescription, storyGenre, storyTags, chapters } = location.state || {};

    const goBackToStoryIndex = () => {
        navigate('/story-index', { state: { storyName, storyImage, storyDescription, storyGenre, storyTags, chapters } });
    };

    return (
        <div className="story-end">
            <div className="story-end-container">
                <h1>Story Result</h1>
                <p>
                    Here's where the result of the story will appear! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor orci.
                </p>
                <div className="story-end-button">
                    <button className="bookmark" ><a href="/story-review">Bookmark Story and Leave a Review!</a></button>
                </div>
            </div>
        </div>
    );
};

export default StoryEnd;
