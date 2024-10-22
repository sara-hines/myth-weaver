import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../../utils/mutations';
import Modal from 'react-modal';
import './CreateStory.css';
import Auth from '../../utils/auth';
import UploadImage from '../UploadImage/UploadImage';
import FadeInText from '../FadeInText/FadeInText';

Modal.setAppElement('#root');

// Define the CreateStory component
function CreateStory() {
  // Setup for addStory mutation
  const [addStory, { error }] = useMutation(ADD_STORY);

  // State variables for managing the visibility of various modals
  const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
  const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
  const [hasStartedStory, setHasStartedStory] = useState(false);

  // State variables for storing story metadata
  const [storyTitle, setStoryTitle] = useState('');
  const [storyDescription, setStoryDescription] = useState('');
  const [storyImage, setStoryImage] = useState('');
  const [storyGenre, setStoryGenre] = useState('');
  const [storyTags, setStoryTags] = useState('');

  // State variables for managing chapters and choices within the story
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
  const [chapterIndexToEdit, setChapterIndexToEdit] = useState(null);
  const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);

  const navigate = useNavigate();

  // Handlers for changing story metadata
  const handleStoryTitleChange = (event) => {
    setStoryTitle(event.target.value); // Update story title
  };

  const handleStoryDescriptionChange = (event) => {
    setStoryDescription(event.target.value); // Update story description
  };

  const handleStoryImageChange = (url) => {
    setStoryImage(url); // Set the image URL from the UploadImage component
  };

  const handleStoryGenreChange = (event) => {
    setStoryGenre(event.target.value); // Update story genre
  };

  const handleStoryTagsChange = (event) => {
    setStoryTags(event.target.value); // Update story tags
  };

  // Handler for changing chapter fields
  const handleChapterChange = (field, value) => {
    setCurrentChapter(prevState => ({
      ...prevState,
      [field]: value // Update the specified field of the current chapter
    }));
  };

  // Handler for changing choice fields
  const handleChoiceChange = (index, field, value) => {
    const newChoices = [...currentChapter.choices];
    newChoices[index][field] = value; // Update the specified field of the specified choice
    setCurrentChapter(prevState => ({
      ...prevState,
      choices: newChoices // Update choices array in the current chapter
    }));
  };

  // Function to add a new choice to the current chapter
  const addChoice = () => {
    if (currentChapter.choices.length < 3) {
      setCurrentChapter(prevState => ({
        ...prevState,
        choices: [...prevState.choices, { choiceText: '', nextChapterIndex: null }],
        isEnd: false // Automatically unmark as end if a choice is added
      }));
    } else {
      alert('You can only add up to three choices.');
    }
  };

  // Function to remove a choice from the current chapter
  const removeChoice = (index) => {
    const newChoices = [...currentChapter.choices];
    newChoices.splice(index, 1); // Remove the specified choice
    setCurrentChapter(prevState => ({
      ...prevState,
      choices: newChoices
    }));
  };

  // Handler for submitting initial story details
  const handleInitialSubmit = (event) => {
    event.preventDefault();
    setIsInitialModalOpen(false);
    setIsChapterModalOpen(true);
    setHasStartedStory(true);
  };

  // Handler for submitting a chapter
  const handleChapterSubmit = (event) => {
    event.preventDefault();

    // Create a new chapter object
    const newChapter = {
      title: currentChapter.title,
      content: currentChapter.content,
      isEnd: currentChapter.isEnd,
      choices: currentChapter.choices
    };

    if (chapterIndexToEdit !== null) {
      const updatedChapters = [...chapters];
      updatedChapters[chapterIndexToEdit] = newChapter; // Update existing chapter if in edit mode
      setChapters(updatedChapters);
    } else {
      setChapters([...chapters, newChapter]); // Add new chapter
    }

    // Reset current chapter and close chapter modal
    setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
    setIsChapterModalOpen(false);
    setChapterIndexToEdit(null);
  };

  // Handler for submitting an choice as a new chapter
  const handleChoiceSubmit = (event) => {
    event.preventDefault();

    // Create a new chapter object
    const newChapter = {
      title: currentChapter.title,
      content: currentChapter.content,
      isEnd: currentChapter.isEnd,
      choices: currentChapter.choices
    };

    // Update chapters array
    const updatedChapters = [...chapters];
    updatedChapters[chapters.length] = newChapter;

    // Set the nextChapterIndex for the choice in the parent chapter
    const parentChapterIndex = currentChoiceIndex.parentChapterIndex;
    const parentChoiceIndex = currentChoiceIndex.parentChoiceIndex;
    updatedChapters[parentChapterIndex].choices[parentChoiceIndex].nextChapterIndex = chapters.length;

    setChapters(updatedChapters);

    // Reset current chapter and close choice modal
    setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
    setIsChoiceModalOpen(false);
    setCurrentChoiceIndex(null);
  };

  // Function to add a new chapter for a specific choice
  const addNewChapterForChoice = (parentChapterIndex, parentChoiceIndex) => {
    if (chapters.length >= 90) {
      alert('You have reached the maxium limit of chapters. Consider splitting your story into multiple stories for the best reader experience.');
      return;
    }
    // Set the current choice index and open the choice modal
    setCurrentChoiceIndex({ parentChapterIndex, parentChoiceIndex });
    setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
    setIsChoiceModalOpen(true);
  };

  // Function to edit an existing chapter
  const editChapter = (index) => {
    const chapterToEdit = chapters[index];

    setCurrentChapter({
      title: chapterToEdit.title,
      content: chapterToEdit.content,
      isEnd: chapterToEdit.isEnd,
      choices: chapterToEdit.choices
    });
    setChapterIndexToEdit(index);
    setIsChapterModalOpen(true);
  };

  // Function to finalize the story and navigate to the story index page
  const finalizeStory = async () => {

    try {
      // Get the user's data, including _id, by decoding their token
      const profile = await Auth.getProfile();

      const userId = profile.data._id;
      const author = profile.data.username;

      const storyInput = {
        title: storyTitle,
        author,
        description: storyDescription,
        imageUrl: storyImage,
        genre: storyGenre,
        tags: storyTags,
        chapters
      }

      const storyData = await addStory({
        variables: { storyInput }
      });

      if (storyData) {
        navigate(`/story-index/${storyData.data.addStory._id}`);
      }

    } catch (err) {
      console.error(err);
    }
  };

  // Function to render chapters recursively
  const renderChapters = (chapterIndex, depth = 0) => {
    const chapter = chapters[chapterIndex];
    if (!chapter) return null;

    const indentClass = `indent-${depth}`; // Class for indenting nested chapters

    return (
      <div className={`chapter-wrapper ${indentClass}`} key={chapterIndex}>
        <button onClick={() => editChapter(chapterIndex)}>
          {chapter.title}
        </button>
        <div>
          {chapter.choices.map((choice, choiceIndex) => (
            <div key={choiceIndex} className={`indent-${depth + 1}`}>
              <button onClick={() => addNewChapterForChoice(chapterIndex, choiceIndex)}>
                {choice.choiceText || `Choice ${choiceIndex + 1}`}
              </button>
              {chapter.isEnd && <span> (End)</span>}
              {choice.nextChapterIndex !== null && (
                <span>
                  {` -> Chapter ${choice.nextChapterIndex + 1}`}
                  {renderChapters(choice.nextChapterIndex, depth + 1)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className='create-story-container'>
      <div className='create-story-content'>
        {(!hasStartedStory && !isInitialModalOpen) && (
          <>
            <div className='fade-in-text'>
              <FadeInText text="Your Story Starts Here . . . " />
            </div>
            <div className='entry-img-wrapper'>
              <img className='entry-img' src='/images/path-under-sky.jpg' alt='path-under-sky' />
              <button className='create-story-button' onClick={() => setIsInitialModalOpen(true)}>Create Story</button>
            </div>
          </>
        )}
        <div className='chapter-container'>
          {chapters.length > 0 && renderChapters(0)}
        </div>
        {chapters.length > 0 && <button className='finalize-story-button' onClick={finalizeStory}>Finalize Story</button>}
      </div>

      {/* Modal for initial story details */}
      <Modal
        isOpen={isInitialModalOpen}
        onRequestClose={() => {
          // Reset the state variables for the form fields
          setStoryTitle('');
          setStoryDescription('');
          setStoryImage('');
          setStoryGenre('');
          setStoryTags('');
          setIsInitialModalOpen(false);
        }}
        className='modal'
        overlayClassName='overlay'
      >
        <div className="modal-header">
          <h2>Start Your Story</h2>
          <button
            className="close-button"
            onClick={() => {
              // Reset the state variables for the form fields
              setStoryTitle('');
              setStoryDescription('');
              setStoryImage('');
              setStoryGenre('');
              setStoryTags('');
              setIsInitialModalOpen(false);
            }}
          >
          </button>
        </div>
        <form onSubmit={handleInitialSubmit}>
          <label htmlFor='storyTitle'>Story Title:</label>
          <input type='text' id='storyTitle' value={storyTitle} onChange={handleStoryTitleChange} required />

          <label htmlFor='storyDescription'>Brief Description:</label>
          <textarea id='storyDescription' value={storyDescription} onChange={handleStoryDescriptionChange} required />

          <label htmlFor='storyImage'>Story Image:</label>
          <UploadImage setImageUrl={handleStoryImageChange} />

          <label htmlFor='storyGenre'>Genre:</label>
          <input type='text' id='storyGenre' value={storyGenre} onChange={handleStoryGenreChange} required />

          <label htmlFor='storyTags'>Tags (comma-separated):</label>
          <input type='text' id='storyTags' value={storyTags} onChange={handleStoryTagsChange} required />

          <button type='submit' className='save-and-continue-button'>Save & Continue</button>
        </form>
      </Modal>

      {/* Modal for adding or editing a chapter */}
      <Modal
        isOpen={isChapterModalOpen}
        onRequestClose={() => {
          // Reset the current chapter and close the modal
          setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
          setIsChapterModalOpen(false);
        }}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-header">
          <h2>{chapterIndexToEdit !== null ? 'Edit Chapter' : 'Add New Chapter'}</h2>
          <button
            className="close-button"
            onClick={() => {
              setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
              setIsChapterModalOpen(false);
            }}
          >
          </button>
        </div>
        <form onSubmit={handleChapterSubmit}>
          <label htmlFor='chapterTitle'>Title:</label>
          <input type='text' id='chapterTitle' value={currentChapter.title} onChange={(e) => handleChapterChange('title', e.target.value)} required />
          <label htmlFor='chapterContent'>Content:</label>
          <textarea id='chapterContent' value={currentChapter.content} onChange={(e) => handleChapterChange('content', e.target.value)} required />
          <label className='end-story-label'>
            <span>Ends Story</span>
            <input
              type='checkbox'
              checked={currentChapter.isEnd}
              onChange={(e) => {
                handleChapterChange('isEnd', e.target.checked);
                if (e.target.checked) {
                  // Clear all choices at once when the "Ends Story" checkbox is checked
                  setCurrentChapter(prevState => ({
                    ...prevState,
                    choices: [] // Reset the choices array to empty
                  }));
                }
              }}
            />
          </label>

          {currentChapter.choices.map((choice, index) => (
            <div key={index}>
              <input
                type='text'
                style={{ margin: '5px 0px 15px'}}
                value={choice.choiceText}
                onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
                placeholder='Choice Text'
                required
              />
              <button type='button' className='remove-choice-button' onClick={() => removeChoice(index)}>Remove Choice</button>
            </div>
          ))}
          {currentChapter.choices.length < 3 && <button type='button' className='add-choice-button' onClick={addChoice}>Add Choice</button>}
          <button type='submit' className='save-chapter-button'>{chapterIndexToEdit !== null ? 'Save Changes' : 'Save Chapter'}</button>
        </form>
      </Modal>

      {/* Modal for adding a new chapter for a specific choice */}
      <Modal
        isOpen={isChoiceModalOpen}
        onRequestClose={() => {
          // Reset the current chapter and close the modal
          setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
          setIsChoiceModalOpen(false);
        }}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-header">
          <h2>Add New Chapter for Choice</h2>
          <button
            className="close-button"
            onClick={() => {
              setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
              setIsChoiceModalOpen(false);
            }}
          >
          </button>
        </div>
        <form onSubmit={handleChoiceSubmit}>
          <label htmlFor='chapterTitle'>Title:</label>
          <input type='text' id='chapterTitle' value={currentChapter.title} onChange={(e) => handleChapterChange('title', e.target.value)} required />
          <label htmlFor='chapterContent'>Content:</label>
          <textarea id='chapterContent' value={currentChapter.content} onChange={(e) => handleChapterChange('content', e.target.value)} required />
          <label className='end-story-label'>
            <span>Ends Story</span>
            <input
              type='checkbox'
              checked={currentChapter.isEnd}
              onChange={(e) => {
                handleChapterChange('isEnd', e.target.checked);
                if (e.target.checked) {
                  // Clear all choices at once when the "Ends Story" checkbox is checked
                  setCurrentChapter(prevState => ({
                    ...prevState,
                    choices: [] // Reset the choices array to empty
                  }));
                }
              }}
            />
          </label>

          {currentChapter.choices.map((choice, index) => (
            <div key={index}>
              <input
                type='text'
                style={{ margin: '5px 0px 15px' }}
                value={choice.choiceText}
                onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
                placeholder='Choice Text'
                required
              />
              <button type='button' className='remove-choice-button' onClick={() => removeChoice(index)}>Remove Choice</button>
            </div>
          ))}
          {currentChapter.choices.length < 3 && <button type='button' className='add-choice-button' onClick={addChoice}>Add Choice</button>}
          <button type='submit' className='save-chapter-button'>Save Chapter</button>
        </form>
      </Modal>
    </div>
  );
}

export default CreateStory;

