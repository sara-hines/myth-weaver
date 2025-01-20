import React, { useState } from 'react';
import './UserProfile.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROFILE } from '../../utils/queries';
import { DELETE_STORY, REMOVE_FROM_TBR, REMOVE_FROM_BOOKMARKS } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import FadeInText from '../FadeInText/FadeInText';

const UserProfile = () => {
  // Obtain the user's data with the GET_PROFILE query.
  const { loading, data, error } = useQuery(GET_PROFILE);
  const userData = data?.profile || {};

  // Set up mutations.
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

  // Set up the UI functionality to hide and reveal stories when a section button is clicked.
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

  // Delete a story if the user clicks the Delete Story button.
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

  // Remove from bookmarkedStories if the user clicks the Remove from Bookmarked Stories button. 
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

  // Remove from the toBeReadStories if the user clicks the Remove from TBR List button.
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

  // Render loading state if query is still loading.
  if (loading) {
    return (
      <div className='mythweaver'>
        <div className='main-content'>
          <div className='loading-container'>
            <div className='spinner'></div>
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  // Render error state if there was an error fetching the data.
  if (error) {
    return (
      <div className='mythweaver'>
        <div className='main-content'>
          <div className='error-container'>
            <h2>Error loading profile data</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className='user-profile'>
      <div className='user-main-content'>
        <div className='fade-in-text welcome-text'><FadeInText text={`Welcome, ${userData?.username}!`} /></div>
        <div className='button-container'>
          {/* Navigate to /create-story on click. */}
          <div className='profile-button' onClick={handleCreateStory}>Create A New Story</div>
        </div>
        <div className='additional-content'>

          {/* When the Stories You've Created section is open, display the createdStories if they exist or a no-data-message if not. */}
          <div className='story-section'>
            <h2 onClick={() => toggleSection('created')}>Stories You've Created</h2>
            {isOpen.created && (
              <div className='stories-grid'>
                {userData?.createdStories?.length > 0 ? (
                  <>
                    {userData.createdStories.map((story) => (
                      <div className='story-box' key={story._id}>
                        <Link to={`/story-index/${story._id}`}>
                          <img src={story.imageUrl} alt={story.title} />
                          <h3>{story.title}</h3>
                        </Link>
                        <p className='story-blurb'>{story.description}</p>
                        <button className='delete-btn' onClick={() => handleDeleteStory(story._id)}>Delete Story</button>
                      </div>
                    ))}
                  </>
                ) : (
                  <h3 className='no-data-message'>You haven't created any stories yet.</h3>
                )}
              </div>
            )}
          </div>

          {/* When the Bookmarked Stories section is open, display the bookmarkedStories if they exist or a no-data-message if not. */}
          <div className='story-section'>
            <h2 onClick={() => toggleSection('bookmarked')}>Bookmarked Stories</h2>
            {isOpen.bookmarked && (
              <div className='stories-grid'>
                {userData?.bookmarkedStories?.length > 0 ? (
                  <>
                    {userData.bookmarkedStories.map((story) => (
                      <div className='story-box' key={story._id}>
                        <Link to={`/story-index/${story._id}`}>
                          <img src={story.imageUrl} alt={story.title} />
                          <h3>{story.title}</h3>
                        </Link>
                        <p className='story-author'>Created by {story.author}</p>
                        <p className='story-blurb'>{story.description}</p>
                        <button className='remove-btn' onClick={() => handleRemoveFromBookmarkedStories(story._id)}>Remove from Bookmarks</button>
                      </div>
                    ))}
                  </>
                ) : (
                  <h3 className='no-data-message'>You don't have any bookmarked stories.</h3>
                )}
              </div>
            )}
          </div>

          {/* When the To Be Read List section is open, display the toBeReadStories if they exist or a no-data-message if not. */}
          <div className='story-section'>
            <h2 onClick={() => toggleSection('tbr')}>To Be Read List</h2>
            {isOpen.tbr && (
              <div className='stories-grid'>
                {userData?.toBeReadStories?.length > 0 ? (
                  <>
                    {userData.toBeReadStories.map((story) => (
                      <div className='story-box' key={story._id}>
                        <Link to={`/story-index/${story._id}`}>
                          <img src={story.imageUrl} alt={story.title} />
                          <h3>{story.title}</h3>
                        </Link>
                        <p className='story-author'>Created by {story.author}</p>
                        <p className='story-blurb'>{story.description}</p>
                        <button className='remove-btn' onClick={() => handleRemoveFromTBRList(story._id)}>Remove from TBR List</button>
                      </div>
                    ))}
                  </>
                ) : (
                  <h3 className='no-data-message'>No stories in your To Be Read List at the moment!</h3>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
