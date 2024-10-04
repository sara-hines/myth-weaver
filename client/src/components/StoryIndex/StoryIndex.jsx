import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './StoryIndex.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_STORY, GET_PROFILE } from '../../utils/queries';
import { ADD_TO_TBR, REMOVE_FROM_TBR } from '../../utils/mutations';
import Auth from '../../utils/auth';

// StoryIndex component which acts as the home/start page for a single story.
const StoryIndex = () => {
  // Extract storyId from the URL parameters.
  const { storyId } = useParams();

  // Queries: fetch story data using the GET_STORY query and profile data using the GET_PROFILE query.
  const { loading: loadingStory, data: storyData, error } = useQuery(GET_STORY, {
    variables: { storyId: storyId },
  });
  const { loading: loadingProfile, data: profileData } = useQuery(GET_PROFILE);

  // Define mutation hooks for adding/removing stories to/from the To Be Read (TBR) list.
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

  // State to track if the story is in the user's TBR list.
  const [isInTBR, setIsInTBR] = useState(false);

  // Extract story and profile data from the fetched results.
  const story = storyData?.story || {};
  const profile = profileData?.profile || {};

  // useEffect to check if the story is in the TBR list when profile or storyId changes.
  useEffect(() => {
    if (profile?.toBeReadStories) {
      const isInList = profile.toBeReadStories.some(tbrStory => tbrStory._id === storyId);
      setIsInTBR(isInList);
    }
  }, [profile, storyId]);

  // Handler function to add/remove story from the TBR list.
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
        setIsInTBR(false);
      } else {
        const addResult = await addToTBR({
          variables: { storyId }
        });
        setIsInTBR(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Function to render star rating.
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  // Function to format tags for display.
  const formatTags = (tags) => {
    if (!tags || tags.length === 0) {
      return null;
    }
    const formattedTags = tags.join(', ');
    return formattedTags;
  }

  // Render loading state if either query is still loading.
  if (loadingStory || loadingProfile) {
    return (
      <div className='mythweaver'>
        <main className='main-content'>
          <div className='loading-container'>
            <div className='spinner'></div>
            <h2>Loading...</h2>
          </div>
        </main>
      </div>
    );
  }

  // Render error state if there was an error fetching the data.
  if (error) {
    return (
      <div className='mythweaver'>
        <main className='main-content'>
          <div className='error-container'>
            <h2>Error loading stories</h2>
          </div>
        </main>
      </div>
    );
  }

  // Render the story details.
  return (
    <div className='mythweaver'>
      <div className='story-index'>
        <main className='story-main-content'>
          <div className='story-photo'>
            <img src={story.imageUrl} alt={story.title} />
          </div>

          <div className='rating'>
            {/* If there are no reviews, so no ratings, display the No Ratings message. */}
            {story?.reviews?.length === 0 || !story?.reviews ? (
              <p>No ratings yet!</p>
            ) : (
              // If there are ratings, render stars and a message explaining the average rating.
              <>
                <div className='display-star-rating star'>
                    {renderStars(story.averageRating)}
                </div>
                <div className='rating'>
                  {story.ratingsCount === 1 ? (
                    <p>Rated {story.averageRating} star{story.averageRating > 1 ? 's' : ''} by 1 person</p>
                  ) : (
                    <p>Rated {story.averageRating} stars on average by {story.ratingsCount} people</p>)}
                </div>
              </>
            )}
          </div>

          {/* Display genre and tags. */}
          <div className='genre-tags-links'>
            <div>Genre: {story.genre}</div>
            <div>Tags: {formatTags(story.tags)}</div>
          </div>

          {/* If the user is logged in, render a button to add/remove the story to/from the user's TBR list. */}
          {Auth.loggedIn() && (
            <div className='tbr-button-container'>
              <button className='tbr-button' onClick={handleToggleTBR}>
                {isInTBR ? 'Remove from To Be Read List' : 'Add to To Be Read List'}
              </button>
            </div>
          )}

          {/* Render the story title, author, description, and link/button to start the story. */}
          <div className='story-description'>
            <h2>{story.title}</h2>
            <p className='author-detail'>Created by {story.author}</p>
            <p>{story.description}</p>
            <Link to={`/story-path/${story._id}`}>
              <button className='start-adventure-button'
              >Start your Adventure Here</button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoryIndex;
