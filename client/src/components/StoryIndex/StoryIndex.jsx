import React from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import './StoryIndex.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_STORY } from '../../utils/queries';
import { ADD_TO_TBR } from '../../utils/mutations';
import Auth from '../../utils/auth';

const StoryIndex = () => {

    const { storyId } = useParams();
    const { loading, data } = useQuery(GET_STORY, {
        variables: { storyId: storyId },
    });
    const story = data?.story || {};
    console.log(story);

    const [addToTBR, { error }] = useMutation(ADD_TO_TBR);

    // take in a storyId parameter here? have storyId as a state variable? 
    const handleAddToTBR = async () => {

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            // Get the user's data, including _id, by decoding their token
            const profile = await Auth.getProfile();
            const data = await addToTBR({
                variables: { storyId }
            });

        } catch (err) {
            console.error(err);
        }
    }

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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="story-index">
            <main className="story-main-content">
                <div className="story-photo">
                    <img src={story.imageUrl} alt={story.title} />
                </div>
                <div className="rating">
                    {story.reviews?.length === 0 || !story?.reviews ? (
                        <p>No ratings yet!</p>
                    ) : (
                        <>
                            {renderStars(story.averageRating)}
                            <p>Rated {story.averageRating} stars on average by {story.ratingsCount} people.</p>
                        </>
                    )}
                </div>

                <div className="genre-tags-links">
                    <div>Genre: {story.genre}</div>
                    <div>Tags: {formatTags(story.tags)}</div>
                </div>

                {/* Added TBR List Button - Sara */}
                <div className='tbr-button-container'>
                    <button className='tbr-button' onClick={handleAddToTBR}>Add to To Be Read List</button>
                </div>

                {/* should have a max character limit. 400-500? */}
                <div className="story-description">
                    <h2>{story.title}</h2>
                    <p>Created by {story.author}</p>
                    <p>{story.description}</p>
                    <Link to={`/story-path/${story._id}`}>
                        <button className="start-adventure-button"
                        >Start your Adventure Here</button>
                    </Link>
                </div>
            </main>

            {story.reviews?.length > 0 &&
                <div className='story-reviews'>
                    {story.reviews.map((review) => (
                        <div key={review._id}>
                            <p>{review.username} on {review.createdAtFormattedDate}:</p>
                            {renderStars(review.rating)}
                            {/* I currently have the typeDefs set up so that a star rating is mandatory but reviewText is not. I'm not super opinionated about that, we could make reviewText mandatory as well. At least for now, this logic is here so we check for reviewText before rendering it. */}
                            {review.reviewText &&
                                <p>{review.reviewText}</p>
                            }
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default StoryIndex;
