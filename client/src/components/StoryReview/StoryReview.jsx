import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StoryReview.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_STORY, GET_PROFILE } from '../../utils/queries';
import { ADD_REVIEW, ADD_TO_BOOKMARKS, REMOVE_FROM_BOOKMARKS } from '../../utils/mutations';
import Auth from '../../utils/auth';

const StoryReview = () => {
  // Obtain storyId from useParams, set up navigate to help with navigation to /myth-index after submiting a review, and set up state variables. 
  const { storyId } = useParams();

  // Set up queries. 
  const { loading: loadingStory, data: storyData, error: storyError } = useQuery(GET_STORY, {
    variables: { storyId: storyId },
  });
  const { loading: loadingProfile, data: profileData, error: profileError } = useQuery(GET_PROFILE);

  // Set up mutations. For the addReview mutation, GET_STORY is done as a refetchQuery so that the new review can be rendered to the page.
  const [addReview, { addReviewError }] =
    useMutation(ADD_REVIEW, {
      refetchQueries: [
        GET_STORY,
        'story'
      ]
    });
  const [addToBookmarks, { addToBookmarksError }] = useMutation(ADD_TO_BOOKMARKS);
  const [removeFromBookmarks, { removeFromBookmarksError }] = useMutation(REMOVE_FROM_BOOKMARKS);


  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);
  const [showRatingError, setShowRatingError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [countdown, setCountdown] = useState(10);
  const [isInBookmarks, setIsInBookmarks] = useState(false);


  const story = storyData?.story || {};
  const profile = profileData?.profile || {};

  // useEffect will be called when the component mounts and any time the profile or storyId changes. It regulates the isInBookmarks state variable to help handleToggleBookmarks call the appropriate mutation to add or remove from bookmarkedStories.
  useEffect(() => {
    if (profile?.bookmarkedStories) {
      const isInList = profile.bookmarkedStories.some(bookmarkStory => bookmarkStory._id === storyId);
      setIsInBookmarks(isInList);
    }
  }, [profile, storyId]);

  // Functionality for the 'Add to Bookmarks' / 'Remove from Bookmarks' button. If the story is already in bookmarkedStories array, it will be removed. If the story is not in the bookmarkedStories array, it will be added.
  const handleToggleBookmarks = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      if (isInBookmarks) {
        const removeResult = await removeFromBookmarks({
          variables: { storyId }
        });
        setIsInBookmarks(false);
      } else {
        const addResult = await addToBookmarks({
          variables: { storyId }
        });
        setIsInBookmarks(true);
      }
    } catch (err) {
      console.error(err);
    }
  };


  const handleSaveReview = async () => {
    // A star rating of 0 can't be accepted when creating a review and will trigger the rating error to be displayed.
    if (rating === 0) {
      setShowRatingError(true);
      return false;
    }
    setShowRatingError(false);
    // The review model stores a username, which can be null, and a firstName, which is pulled from an input element. This allows the review functionality to be accessible to users who have not signed up. 
    try {
      let username = null;
      if (Auth.loggedIn()) {
        const profile = Auth.getProfile();
        username = profile?.data?.username || null;
      }

      const reviewInput = {
        storyId,
        username,
        fullName,
        rating: parseInt(rating),
        reviewText,
      };

      const reviewData = await addReview({
        variables: { reviewInput }
      });

      // Set the success message and redirect the user to /myth-index in 10 seconds.
      if (reviewData) {
        setSuccessMessage('Review submitted successfully! Redirecting to home in 10 seconds.');
        setTimeout(() => {
          navigate('/myth-index');
        }, 10000);
        let countdownInterval = setInterval(() => {
          setCountdown(prev => {
            if (prev === 1) {
              clearInterval(countdownInterval);
            }
            return prev - 1;
          });
        }, 1000);
      }

      setReviewText('');
      setRating(0);
      setFullName('');
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };

  // Rating tracking and user interactivity for reviews.
  const handleStarClick = (rating) => {
    setRating(rating);
    if (rating > 0) {
      setShowRatingError(false);
    }
  };

  const handleStarMouseEnter = (rating) => {
    setHoveredStar(rating);
  };

  const handleStarMouseLeave = () => {
    setHoveredStar(0);
  };


  // For the Recent Reviews section, render the appropriate amount of stars for each review.
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  // Render loading state if either query is still loading.
  if (loadingStory || loadingProfile) {
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


  return (
    <section className='story-review'>
      <div className='story-review-container'>
        <div className='review-form'>
          <h2>Leave a Review</h2>
          <input
            type='text'
            placeholder='Your Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='fullName-input'
          />
          <textarea
            placeholder='Write your review here...'
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className='review-textarea'
          />
          <div className='star-rating'>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${hoveredStar >= star || rating >= star ? 'filled' : ''}`}
                // Click handler to update star rating after user clicks a star.
                onClick={() => handleStarClick(star)}
                // onMouseEnter and onMouseLeave handlers for user interactivity / styling effects.
                onMouseEnter={() => handleStarMouseEnter(star)}
                onMouseLeave={handleStarMouseLeave}
              >
                ★
              </span>
            ))}
          </div>

          {/* Display error message if user attempts to submit a review without providing a star rating. */}
          {showRatingError && (
            <div className='rating-error'>
              A star rating of at least 1 is required to submit a review.
            </div>
          )}

          <div className='review-buttons'>
            {/* Button to save review. */}
            <button
              onClick={handleSaveReview}
              className='save-button'>Save your Review</button>
            {/* If the user is logged in, display the 'Remove from Bookmarks' / 'Add to Bookmarks' button. */}
            {Auth.loggedIn() && (
              <button className='save-button'
                onClick={handleToggleBookmarks}>
                {isInBookmarks ? 'Remove from Bookmarks' : 'Add to Bookmarks'}
              </button>
            )}
          </div>

          {/* If the user has just successfully submitted a review, display the success message and countdown to navigate to home. */}
          {successMessage && (
            <div className='review-success-message'>
              {successMessage} ({countdown})
            </div>
          )}
        </div>

        {/* If there are existing reviews for this story, display the reviews and render the appropriate number of stars for each review. */}
        {story?.reviews?.length > 0 &&
          <div className='reviews-list'>
            <h2>Recent Reviews</h2>
            <div className='reviews-list-container'>
              {story.reviews?.map((review, index) => (
                <div key={index} className='review-item'>
                  {review.username ? (
                    <h3>{review.username} on {review.createdAtFormattedDate}:</h3>
                  ) : (
                    <h3>{review.fullName} on {review.createdAtFormattedDate}:</h3>
                  )}
                  <p className='star-rating star filled'>{renderStars(review.rating)}</p>
                  <p>{review.reviewText}</p>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default StoryReview;