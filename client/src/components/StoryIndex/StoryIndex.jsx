import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './StoryIndex.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_STORY, GET_PROFILE } from '../../utils/queries';
import { ADD_TO_TBR, REMOVE_FROM_TBR } from '../../utils/mutations';
import Auth from '../../utils/auth';

const StoryIndex = () => {
    const { storyId } = useParams();

    const { loading: loadingStory, data: storyData, error } = useQuery(GET_STORY, {
        variables: { storyId: storyId },
    });

    const { loading: loadingProfile, data: profileData } = useQuery(GET_PROFILE);

    const [addToTBR, { addToTBRError }] = useMutation
        (ADD_TO_TBR, {
            refetchQueries: [
                GET_STORY,
                'story'
            ]
        });
    
    const [removeFromTBR, { removeFromTBRError }] = useMutation
        (REMOVE_FROM_TBR, {
            refetchQueries: [
                GET_STORY,
                'story'
            ]
        });
    const [isInTBR, setIsInTBR] = useState(false);

    console.log('your profileData is:')
    console.log(profileData);
    const story = storyData?.story || {};
    const profile = profileData?.profile || {};
    
    console.log('the next console log will be your story variable from StoryIndex.jsx:')
    console.log(story);

    useEffect(() => {
        console.log('your profile var inside useEffect is:')
        console.log(profile);
        if (profile?.readerInfo?.toBeReadStories) {
            console.log('your profile.readerInfo.toBeReadStories is:')
            console.log(profile.readerInfo.toBeReadStories);
            const isInList = profile.readerInfo.toBeReadStories.some(tbrStory => tbrStory._id === storyId);
            setIsInTBR(isInList);
        }
    }, [profile, storyId]);


    const handleToggleTBR = async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            if (isInTBR) {
                const removeResult = await removeFromTBR({
                    variables: { storyId }
                });
                console.log('your remove result is:')
                console.log(removeResult);
                setIsInTBR(false);
            } else {
                const addResult = await addToTBR({
                    variables: { storyId }
                });
                console.log('your addResult is:')
                console.log(addResult);
                setIsInTBR(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i}>★</span>);
        }
        return stars;
    };

    const formatTags = (tags) => {
        if (!tags || tags.length === 0) {
            return null;
        }

        const formattedTags = tags.join(', ');
        return formattedTags;
    }

    if (loadingStory || loadingProfile) {
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

    return (
        <div className="story-index">
            <main className="story-main-content">
                <div className="story-photo">
                    <img src={story.imageUrl} alt={story.title} />
                </div>
                <div className="rating">
                    {story?.reviews?.length === 0 || !story?.reviews ? (
                        <p>No ratings yet!</p>
                    ) : (
                        <>
                            <div className='display-star-rating star'>
                                {renderStars(story.averageRating)}
                            </div>
                            <div className='rating-explanation'>
                                {story.ratingsCount === 1 ? (
                                    <p>Rated {story.averageRating} stars by 1 person</p>
                                ) : (
                                    <p>Rated {story.averageRating} stars on average by {story.ratingsCount} people</p>)}
                            </div>
                        </>
                    )}
                </div>

                <div className="genre-tags-links">
                    <div>Genre: {story.genre}</div>
                    <div>Tags: {formatTags(story.tags)}</div>
                </div>

                {/* Added TBR List Button - Sara */}
                <div className='tbr-button-container'>
                    <button className='tbr-button' onClick={handleToggleTBR}>
                        {isInTBR ? 'Remove from To Be Read List' : 'Add to To Be Read List'}
                    </button>
                </div>

                {/* should have a max character limit. 400-500? */}
                <div className="story-description">
                    <h2>{story.title}</h2>
                    <p className='author-detail'>Created by {story.author}</p>
                    <p>{story.description}</p>
                    <Link to={`/story-path/${story._id}`}>
                        <button className="start-adventure-button"
                        >Start your Adventure Here</button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default StoryIndex;
