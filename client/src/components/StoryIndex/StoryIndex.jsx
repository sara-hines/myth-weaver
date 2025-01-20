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

  // Scroll to the top of the page, in case the user arrived from a different scroll position at /myth-index
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className='main-content-story-index'>
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
        <div className='main-content-story-index'>
          <div className='error-container'>
            <h2>Error loading stories</h2>
          </div>
        </div>
      </div>
    );
  }

  // Render the story details. 
  return (
    <section className='mythweaver'>
      <div className='story-index'>
        <div className='story-main-content'>
          <div className='accessory-info'>

            <div className='story-photo-wrapper'>
              {/* On mobile view, this div.title-wrapper-mobile displays the title on a transparent background on top of the photo. */}
              <div className='title-wrapper-mobile'>
                <p className='title-text-mobile'>{story.title}</p>
              </div>
              <div className='story-photo'>
                <img src={story.imageUrl} alt={story.title} />
              </div>
            </div>

            {/* Start of rating container which only appears here on the desktop view */}
            <div className='rating-desktop'>
              {/* If there are no reviews, so no ratings, display the No Ratings message. */}
              {story?.reviews?.length === 0 || !story?.reviews ? (
                <p className='no-ratings-message-desktop'>No ratings yet. Be the first to rate this story after reading it!</p>
              ) : (
                // If there are ratings, render stars and a message explaining the average rating.
                <div className='rating-container-desktop'>
                  <div className='star-desktop'>
                      {renderStars(story.averageRating)}
                  </div>
                  <div className='rating-detail-desktop'>
                    {story.ratingsCount === 1 ? (
                      <p>Rated {story.averageRating} star{story.averageRating > 1 ? 's' : ''} by 1 person</p>
                    ) : (
                      <p>Rated {story.averageRating} stars on average by {story.ratingsCount} people</p>)}
                  </div>
                </div>
              )}
            </div>
            {/* End of rating container which only appears here on the mobile view */}

            {/* On desktop view, genre and tags appear here. */}
            <div className='genre-tags-desktop'>
              <div>Genre: {story.genre}</div>
              <div>Tags: {formatTags(story.tags)}</div>
            </div>

            {/* If the user is logged in and in desktop view, render a button to add/remove the story to/from the user's TBR list. */}
            {Auth.loggedIn() && (
              <div className='tbr-button-container-desktop'>
                <button className='tbr-button-desktop' onClick={handleToggleTBR}>
                  {isInTBR ? 'Remove from To Be Read List' : 'Add to To Be Read List'}
                </button>
              </div>
            )}
          </div>

          {/* Render the story title, author, description, and link/button to start the story. */}
          <div className='story-index-description'>
            <h2 className='title-desktop'>{story.title}</h2>
            <p className='author-desktop'>Created by {story.author}</p>
            <p className='description'>{story.description}</p>

            <div className='author-and-genre-mobile'>Created by {story.author} in MythWeaver's {story.genre} genre.</div>

            {/* Start of rating container which only appears here on the mobile view */}
            <div className='rating-mobile'>
              {/* If there are no reviews, so no ratings, display the No Ratings message. */}
              {story?.reviews?.length === 0 || !story?.reviews ? (
                <p className='no-ratings-message-mobile'>No ratings yet. Be the first to rate this story after playing through it!</p>
              ) : (
                // If there are ratings, render stars and a message explaining the average rating.
                <div className='rating-container-mobile'>
                  <div className='star-mobile'>
                    {renderStars(story.averageRating)}
                  </div>
                  <div className='rating-mobile'>
                    {story.ratingsCount === 1 ? (
                      <p>Rated {story.averageRating} star{story.averageRating > 1 ? 's' : ''} by 1 person</p>
                    ) : (
                      <p>Rated {story.averageRating} stars on average by {story.ratingsCount} people</p>)}
                  </div>
                </div>
              )}
            </div>
            {/* End of rating container which only appears here on the mobile view */}

            {/* On mobile view, tags appear here. */}
            <div className='tags-mobile'>Tags: {formatTags(story.tags)}</div>

            {/* If the user is logged in and in mobile view, render a button to add/remove the story to/from the user's TBR list. */}
            {Auth.loggedIn() && (
              <button className='tbr-button-mobile' onClick={handleToggleTBR}>
                {isInTBR ? 'Remove from To Be Read List' : 'Add to To Be Read List'}
              </button>
            )}

            <Link to={`/story-path/${story._id}`}>
              <button className='start-adventure-button'
              >Start your Adventure Here</button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryIndex;
