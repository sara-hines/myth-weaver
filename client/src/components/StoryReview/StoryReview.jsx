import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './StoryReview.css';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW, ADD_TO_BOOKMARKS } from '../../utils/mutations';
import Auth from '../../utils/auth';

const StoryReview = () => {
    const [reviewText, setReviewText] = useState('');
    const [starRating, setStarRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [addReview, { addReviewError }] = useMutation(ADD_REVIEW);
    const [addToBookmarks, { addToBookmarksError }] = useMutation(ADD_TO_BOOKMARKS);
    const { storyId } = useParams();

    const handleSaveReview = async () => {

        const { storyId } = useParams();

        try {
            const profile = await Auth.getProfile();
            const reviewInput = {
                storyId: storyId,
                username: profile.data.username,
                rating: starRating,
                reviewText: reviewText
            }

            console.log(starRating);

            const reviewData = await addReview({
                variables: { reviewInput }
            })

            console.log(reviewData);
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }

        setReviews([newReview, ...reviews].slice(0, 5));
        setReviewText('');
        setStarRating(0);
        setUsername('');
    };

    const handleAddToBookmarks = async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const profile = await Auth.getProfile();
            console.log('this is your profile from inside handleAddToBookmarks: ');
            console.log(profile);
            console.log('this is your storyId from inside handleAddToBookmarks: ');
            console.log(storyId);

            const userData = await addToBookmarks({
                variables: { storyId }
            })
            console.log(userData);
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    }

    // Star Rating clicky nonsense
    const handleStarClick = (rating) => {
        setStarRating(rating);
    };

    const handleStarMouseEnter = (rating) => {
        setHoveredStar(rating);
    };

    const handleStarMouseLeave = () => {
        setHoveredStar(0);
    };
    // End star Rating clicky nonsense

    return (
        <div className="story-review">
            <div className="story-review-container">
                <h2>Leave a Review</h2>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="username-input"
                />
                <textarea
                    placeholder="Write your review here..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="review-textarea"
                />
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`star ${hoveredStar >= star || starRating >= star ? 'filled' : ''}`}
                            onClick={() => handleStarClick(star)}
                            onMouseEnter={() => handleStarMouseEnter(star)}
                            onMouseLeave={handleStarMouseLeave}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <div className="review-buttons">
                    <button
                        // onClick={handleSaveReview}
                        className="save-button">Save Review</button>
                    <button className="save-button"
                        onClick={handleAddToBookmarks}
                    >Bookmark Story</button>
                </div>

                <h2>Recent Reviews</h2>
                <div className="reviews-list">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-item">
                            <h3>{review.username}</h3>
                            <p>{review.date}</p>
                            <p>{'★'.repeat(review.starRating)}{'☆'.repeat(5 - review.starRating)}</p>
                            <p>{review.reviewText}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryReview;