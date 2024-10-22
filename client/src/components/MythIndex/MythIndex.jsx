import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STORIES } from '../../utils/queries';
import { Link } from 'react-router-dom';
import './MythIndex.css';

const MythIndex = () => {
  const { loading, data, error } = useQuery(GET_STORIES);
  const stories = data?.stories || [];

  // For mobile viewport widths: useEffect to add hover class to each story thumbnail when the user scrolls to it
  useEffect(() => {
    // This will ensure the hover effect is only applied on smaller screens
    const applyHoverEffect = () => window.innerWidth < 480;

    if (applyHoverEffect()) {
      const containers = document.querySelectorAll('.story-container');

      if (containers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (applyHoverEffect()) {
              if (entry.isIntersecting) {
                entry.target.classList.add('hover');
              } else {
                entry.target.classList.remove('hover');
              }
            }
          });
        }, {
          threshold: 0.9
        });

        containers.forEach(container => {
          observer.observe(container);
        });

        // Cleanup observer when component unmounts
        return () => {
          containers.forEach(container => {
            observer.unobserve(container);
          });
        };
      }
    }
  }, [loading]); // Ensure observer is created after content has loaded


  // Render loading state if still loading.
  if (loading) {
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

  const handleImageError = (event) => {
    event.target.src = '/images/sample-img-1.jpg'; // Fallback image URL
  };

  return (
    // Display the stories
    <div className='mythweaver'>
      <main className='main-content'>
        <div className='story-grid'>
          {stories.map((story, index) => (
            <Link to={`/story-index/${story._id}`} key={story._id}>
              <div className={`story-container story`}>
                <div className='story-image-wrapper'>
                  <img className='story-image' src={story.imageUrl} alt={story.title} onError={handleImageError} />
                </div>
                <div className='story-title-container'>
                  <p className='story-title'>{story.title}</p>
                </div>
                <div className='story-info'>
                  <p className='story-description'>{story.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MythIndex;
