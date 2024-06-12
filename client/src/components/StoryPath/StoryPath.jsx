import React from 'react';
import { useState, useEffect } from 'react';
import './StoryPath.css';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_STORY } from '../../utils/queries';

const StoryPath = () => {

  const { storyId } = useParams();
  const { loading, data } = useQuery(GET_STORY, {
    variables: { storyId: storyId },
  });
  const story = data?.story || {};

  // Find the initial chapter.
  const initialChapter = story.chapters?.find(chapter => chapter.chapterIndex === 0) || null;

  // Use state to manage the current chapter.
  const [currentChapter, setCurrentChapter] = useState(initialChapter);

  // Update the state when data is loaded and the initial chapter is found.
  useEffect(() => {
    if (story.chapters) {
      const initialChapter = story.chapters?.find(chapter => chapter.chapterIndex === 0);
      setCurrentChapter(initialChapter);
    }
  }, [story.chapters]);

  // Function to handle choice selection.
  const handleChoiceClick = (nextChapterIndex) => {
    const nextChapter = story.chapters.find(chapter => chapter.chapterIndex === nextChapterIndex);
    setCurrentChapter(nextChapter);
  };

  if (loading) {
    return (
      <div className='story-path-pg-wrapper'>
        <main className='story-path'>
          <div className='loading-container'>
            <div className='spinner'></div>
            <h2>Loading...</h2>
          </div>
        </main>
      </div>
    );
  }

  if (!currentChapter) {
    return <div>No chapter found.</div>;
  }

  return (
    <div className='story-path-pg-wrapper'>
      <div className='story-path'>
        {/* If the currentChapter is not the end of the story, render the chapter's content and choices. */}
        {!currentChapter.isEnd ? (
          <div className='story-path-container'>
            <h1>{currentChapter.title}</h1>
            <p>{currentChapter.content}</p>
            <div className='options'>
              {currentChapter.choices.map((choice, index) => (
                <button
                  key={choice._id}
                  className='option'
                  onClick={() => handleChoiceClick(choice.nextChapterIndex)}
                >
                  {choice.choiceText}
                </button>
              ))}
            </div>
          </div>
          // If currentChapter is the end of the story, render the ending and a button to go review the story.
        ) : (
          <div className='story-path-container'>
            <h1>{currentChapter.title}</h1>
            <p>{currentChapter.content}</p>

            <Link to={`/story-review/${storyId}`} className='remove-text-decoration'>
              <div className='story-end-button'>
                <button className='bookmark'>Bookmark Story and Leave a Review!</button>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryPath;

