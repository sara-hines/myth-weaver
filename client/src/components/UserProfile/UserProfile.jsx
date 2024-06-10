import React, { useState } from 'react';
import './UserProfile.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROFILE } from '../../utils/queries';
import { DELETE_STORY, REMOVE_FROM_TBR, REMOVE_FROM_BOOKMARKS } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { loading, data, error } = useQuery(GET_PROFILE);
    const userData = data?.profile || {};
    console.log(userData);

    const [deleteStory, { deleteStoryError }] = useMutation
        (DELETE_STORY, {
            refetchQueries: [
                GET_PROFILE,
                'profile'
            ]
        });

    const [removeFromTBR, { removeFromTBRerror }] = useMutation
        (REMOVE_FROM_TBR, {
            refetchQueries: [
                GET_PROFILE,
                'profile'
            ]
        });

    const [removeFromBookmarks, { removeFromBookmarksError }] = useMutation
        (REMOVE_FROM_BOOKMARKS, {
            refetchQueries: [
                GET_PROFILE,
                'profile'
            ]
        });

    const [isOpen, setIsOpen] = useState({
        created: false,
        bookmarked: false,
        tbr: false,
    });

    const toggleSection = (section) => {
        setIsOpen(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    const handleCreateStory = () => {
        window.location.href = '/create-story';
    };

    const handleUpdateStory = (storyId) => {
        window.location.href = `/create-story/${storyId}`;
    };

    const handleDeleteStory = async (storyId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await deleteStory({
                variables: { storyId }
            });
            if (!data) {
                throw new Error('Sorry, there was an error in deleting a story.');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleRemoveFromBookmarkedStories = async (storyId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeFromBookmarks({
                variables: { storyId }
            });
            if (!data) {
                throw new Error('Sorry, there was an error in removing the story from bookmarks.');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleRemoveFromTBRList = async (storyId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeFromTBR({
                variables: { storyId }
            });
            if (!data) {
                throw new Error('Sorry, there was an error in removing the story from the To Be Read list.');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const renderStars = (averageRating) => {
        const stars = [];
        for (let i = 0; i < averageRating; i++) {
            stars.push(<span key={i}>★</span>);
        }
        return stars;
    };

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
                        <h2>Error loading profile data</h2>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="user-profile">
            <main className="user-main-content">
                <div className="button-container">
                    <div className="profile-button" onClick={handleCreateStory}>Create A New Story</div>
                </div>
                <section className="additional-content">
                    <div className="story-section">
                        <h2 onClick={() => toggleSection('created')}>Stories You've Created</h2>
                        {isOpen.created && (
                            <div className="stories-grid">
                                {userData?.authorInfo?.createdStories?.length > 0 ? (
                                    <>
                                        {userData.authorInfo.createdStories.map((story) => (
                                            <div className="story-box" key={story._id}>
                                                <Link to={`/story-index/${story._id}`} className='remove-text-decoration'>
                                                    <img src={story.imageUrl} alt={story.title} />
                                                    <h3>{story.title}</h3>
                                                    <p>{story.description}</p>
                                                </Link>
                                                <div className="actions">
                                                    <button onClick={() => handleUpdateStory(story._id)}>Update Story</button>
                                                    <button className="delete-btn" onClick={() => handleDeleteStory(story._id)}>Delete Story</button>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <h1 className='no-data-message'>You haven't created any stories!</h1>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="story-section">
                        <h2 onClick={() => toggleSection('bookmarked')}>Bookmarked Stories</h2>
                        {isOpen.bookmarked && (
                            <div className="stories-grid">
                                {userData?.readerInfo?.bookmarkedStories?.length > 0 ? (
                                    <>
                                        {userData?.readerInfo?.bookmarkedStories?.map((story) => (
                                            <div className="story-box" key={story._id}>
                                                <Link to={`/story-index/${story._id}`} className='remove-text-decoration'>
                                                    <img src={story.imageUrl} alt={story.title} />
                                                    <h3>{story.title}</h3>
                                                    <p className='story-author'>Created by {story.author}</p>
                                                    <p>{story.description}</p>
                                                </Link>
                                                <div className="actions">
                                                    <button className="remove-btn" onClick={() => handleRemoveFromBookmarkedStories(story._id)}>Remove from Bookmarked Stories</button>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <h1 className='no-data-message'>You don't have any bookmarked stories!</h1>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="story-section">
                        <h2 onClick={() => toggleSection('tbr')}>To Be Read List</h2>
                        {isOpen.tbr && (
                            <div className="stories-grid">
                                {userData?.readerInfo?.toBeReadStories?.length > 0 ? (
                                    <>
                                        {userData.readerInfo.toBeReadStories.map((story) => (
                                            <div className="story-box" key={story._id}>
                                                <Link to={`/story-index/${story._id}`} className='remove-text-decoration'>
                                                    <img src={story.imageUrl} alt={story.title} />
                                                    <h3>{story.title}</h3>
                                                    <p className='story-author'>Created by {story.author}</p>
                                                    <p>{story.description}</p>
                                                </Link>
                                                <div className="actions">
                                                    <button className="remove-btn" onClick={() => handleRemoveFromTBRList(story._id)}>Remove from TBR List</button>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <h1 className='no-data-message'>No stories in your To Be Read List at the moment!</h1>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default UserProfile;
