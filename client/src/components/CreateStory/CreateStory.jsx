// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useMutation } from '@apollo/client';
// // import { ADD_STORY } from '../../utils/mutations';
// // import Modal from 'react-modal';
// // import './CreateStory.css';
// // import Auth from '../../utils/auth';
// // import axios from 'axios';

// // Modal.setAppElement('#root');

// // function CreateStory() {
// //     const [addStory, { error }] = useMutation(ADD_STORY);
// //     const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
// //     const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
// //     const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
// //     const [hasStartedStory, setHasStartedStory] = useState(false);
// //     const [storyTitle, setStoryTitle] = useState('');
// //     const [storyDescription, setStoryDescription] = useState('');
// //     const [storyImage, setStoryImage] = useState('');
// //     const [storyGenre, setStoryGenre] = useState('');
// //     const [storyTags, setStoryTags] = useState('');
// //     const [chapters, setChapters] = useState([]);
// //     const [currentChapter, setCurrentChapter] = useState({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
// //     const [chapterIndexToEdit, setChapterIndexToEdit] = useState(null);
// //     const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);

// //     const navigate = useNavigate();

// //     const handleStoryTitleChange = (event) => {
// //         setStoryTitle(event.target.value);
// //     };

// //     const handleStoryDescriptionChange = (event) => {
// //         setStoryDescription(event.target.value);
// //     };

// //     const handleStoryImageChange = async (event) => {
// //         const file = event.target.files[0];
// //         const formData = new FormData();
// //         formData.append('file', file);

// //         try {
// //             const response = await axios.post('/api/upload', formData, {
// //                 headers: {
// //                     'Content-Type': 'multipart/form-data',
// //                 },
// //             });
// //             setStoryImage(response.data.url);
// //         } catch (error) {
// //             console.error('Error uploading image:', error);
// //             alert('Error uploading image. Please try again.');
// //         }
// //     };

// //     const handleStoryGenreChange = (event) => {
// //         setStoryGenre(event.target.value);
// //     };

// //     const handleStoryTagsChange = (event) => {
// //         setStoryTags(event.target.value);
// //     };

// //     const handleChapterChange = (field, value) => {
// //         setCurrentChapter((prevState) => ({
// //             ...prevState,
// //             [field]: value,
// //         }));
// //     };

// //     const handleChoiceChange = (index, field, value) => {
// //         const newChoices = [...currentChapter.choices];
// //         newChoices[index][field] = value;
// //         setCurrentChapter((prevState) => ({
// //             ...prevState,
// //             choices: newChoices,
// //         }));
// //     };

// //     const addChoice = () => {
// //         if (currentChapter.choices.length < 3) {
// //             setCurrentChapter((prevState) => ({
// //                 ...prevState,
// //                 choices: [...prevState.choices, { choiceText: '', nextChapterIndex: null }],
// //             }));
// //         } else {
// //             alert('You can only add up to three choices.');
// //         }
// //     };

// //     const removeChoice = (index) => {
// //         const newChoices = [...currentChapter.choices];
// //         newChoices.splice(index, 1);
// //         setCurrentChapter((prevState) => ({
// //             ...prevState,
// //             choices: newChoices,
// //         }));
// //     };

// //     const handleInitialSubmit = (event) => {
// //         event.preventDefault();
// //         setIsInitialModalOpen(false);
// //         setIsChapterModalOpen(true);
// //         setHasStartedStory(true);
// //     };

// //     const handleChapterSubmit = (event) => {
// //         event.preventDefault();

// //         const newChapter = {
// //             title: currentChapter.title,
// //             content: currentChapter.content,
// //             isEnd: currentChapter.isEnd,
// //             choices: currentChapter.choices,
// //         };

// //         if (chapterIndexToEdit !== null) {
// //             const updatedChapters = [...chapters];
// //             updatedChapters[chapterIndexToEdit] = newChapter;
// //             setChapters(updatedChapters);
// //         } else {
// //             setChapters([...chapters, newChapter]);
// //         }

// //         setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
// //         setIsChapterModalOpen(false);
// //         setChapterIndexToEdit(null);
// //     };

// //     const handleChoiceSubmit = (event) => {
// //         event.preventDefault();

// //         const newChapter = {
// //             title: currentChapter.title,
// //             content: currentChapter.content,
// //             isEnd: currentChapter.isEnd,
// //             choices: currentChapter.choices,
// //         };

// //         const updatedChapters = [...chapters];
// //         updatedChapters[chapters.length] = newChapter;

// //         const parentChapterIndex = currentChoiceIndex.parentChapterIndex;
// //         const parentChoiceIndex = currentChoiceIndex.parentChoiceIndex;
// //         updatedChapters[parentChapterIndex].choices[parentChoiceIndex].nextChapterIndex = chapters.length;

// //         setChapters(updatedChapters);

// //         setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
// //         setIsChoiceModalOpen(false);
// //         setCurrentChoiceIndex(null);
// //     };

// //     const addNewChapterForChoice = (parentChapterIndex, parentChoiceIndex) => {
// //         setCurrentChoiceIndex({ parentChapterIndex, parentChoiceIndex });
// //         setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
// //         setIsChoiceModalOpen(true);
// //     };

// //     const editChapter = (index) => {
// //         const chapterToEdit = chapters[index];

// //         setCurrentChapter({
// //             title: chapterToEdit.title,
// //             content: chapterToEdit.content,
// //             isEnd: chapterToEdit.isEnd,
// //             choices: chapterToEdit.choices,
// //         });
// //         setChapterIndexToEdit(index);
// //         setIsChapterModalOpen(true);
// //     };

// //     const finalizeStory = async () => {
// //         try {
// //             const profile = await Auth.getProfile();
// //             const userId = profile.data._id;
// //             const author = profile.data.username;

// //             const storyInput = {
// //                 title: storyTitle,
// //                 author,
// //                 description: storyDescription,
// //                 imageUrl: storyImage,
// //                 genre: storyGenre,
// //                 tags: storyTags,
// //                 chapters,
// //             };

// //             const storyData = await addStory({
// //                 variables: { storyInput },
// //             });

// //             if (storyData) {
// //                 navigate(`/story-index/${storyData.data.addStory._id}`);
// //             }
// //         } catch (err) {
// //             console.error(err);
// //         }
// //     };

// //     const renderChapters = (chapterIndex, depth = 0) => {
// //         const chapter = chapters[chapterIndex];
// //         if (!chapter) return null;

// //         const indentClass = `indent-${depth}`;

// //         return (
// //             <div className={`chapter-wrapper ${indentClass}`} key={chapterIndex}>
// //                 <button onClick={() => editChapter(chapterIndex)}>
// //                     {chapter.title}
// //                 </button>
// //                 <div>
// //                     {chapter.choices.map((choice, choiceIndex) => (
// //                         <div key={choiceIndex} className={`indent-${depth + 1}`}>
// //                             <button onClick={() => addNewChapterForChoice(chapterIndex, choiceIndex)}>
// //                                 {choice.choiceText || `Choice ${choiceIndex + 1}`}
// //                             </button>
// //                             {chapter.isEnd && <span> (End)</span>}
// //                             {choice.nextChapterIndex !== null && (
// //                                 <span>
// //                                     {` -> Chapter ${choice.nextChapterIndex + 1}`}
// //                                     {renderChapters(choice.nextChapterIndex, depth + 1)}
// //                                 </span>
// //                             )}
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         );
// //     };

// //     return (
// //         <div className="create-story-container">
// //             <div className="create-story-content">
// //                 {!hasStartedStory && (
// //                     <button className="create-story-button" onClick={() => setIsInitialModalOpen(true)}>
// //                         Create Story
// //                     </button>
// //                 )}
// //                 <div className="chapter-container">
// //                     {chapters.length > 0 && renderChapters(0)}
// //                 </div>
// //                 {chapters.length > 0 && (
// //                     <button className="finalize-story-button" onClick={finalizeStory}>
// //                         Finalize Story
// //                     </button>
// //                 )}
// //             </div>

// //             <Modal
// //                 isOpen={isInitialModalOpen}
// //                 onRequestClose={() => setIsInitialModalOpen(false)}
// //                 className="modal"
// //                 overlayClassName="overlay"
// //             >
// //                 <h2>Start Your Story</h2>
// //                 <form onSubmit={handleInitialSubmit}>
// //                     <label htmlFor="storyTitle">Story Title:</label>
// //                     <input
// //                         type="text"
// //                         id="storyTitle"
// //                         value={storyTitle}
// //                         onChange={handleStoryTitleChange}
// //                         required
// //                     />

// //                     <label htmlFor="storyDescription">Brief Description:</label>
// //                     <textarea
// //                         id="storyDescription"
// //                         value={storyDescription}
// //                         onChange={handleStoryDescriptionChange}
// //                         required
// //                     />

// //                     <label htmlFor="storyImage">Story Image:</label>
// //                     <input
// //                         type="file"
// //                         id="storyImage"
// //                         onChange={handleStoryImageChange}
// //                         required
// //                     />

// //                     <label htmlFor="storyGenre">Genre:</label>
// //                     <input
// //                         type="text"
// //                         id="storyGenre"
// //                         value={storyGenre}
// //                         onChange={handleStoryGenreChange}
// //                         required
// //                     />

// //                     <label htmlFor="storyTags">Tags (comma-separated):</label>
// //                     <input
// //                         type="text"
// //                         id="storyTags"
// //                         value={storyTags}
// //                         onChange={handleStoryTagsChange}
// //                         required
// //                     />

// //                     <button type="submit">Next</button>
// //                 </form>
// //             </Modal>

// //             <Modal
// //                 isOpen={isChapterModalOpen}
// //                 onRequestClose={() => setIsChapterModalOpen(false)}
// //                 className="modal"
// //                 overlayClassName="overlay"
// //             >
// //                 <h2>{chapterIndexToEdit !== null ? 'Edit Chapter' : 'Add New Chapter'}</h2>
// //                 <form onSubmit={handleChapterSubmit}>
// //                     <label htmlFor="chapterTitle">Title:</label>
// //                     <input
// //                         type="text"
// //                         id="chapterTitle"
// //                         value={currentChapter.title}
// //                         onChange={(e) => handleChapterChange('title', e.target.value)}
// //                         required
// //                     />
// //                     <label htmlFor="chapterContent">Content:</label>
// //                     <textarea
// //                         id="chapterContent"
// //                         value={currentChapter.content}
// //                         onChange={(e) => handleChapterChange('content', e.target.value)}
// //                         required
// //                     />
// //                     <label>
// //                         <input
// //                             type="checkbox"
// //                             checked={currentChapter.isEnd}
// //                             onChange={(e) => handleChapterChange('isEnd', e.target.checked)}
// //                         />
// //                         Ends Story
// //                     </label>

// //                     {currentChapter.choices.map((choice, index) => (
// //                         <div key={index}>
// //                             <input
// //                                 type="text"
// //                                 value={choice.choiceText}
// //                                 onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
// //                                 placeholder="Choice Text"
// //                                 required
// //                             />
// //                             <button type="button" onClick={() => removeChoice(index)}>
// //                                 Remove Choice
// //                             </button>
// //                         </div>
// //                     ))}
// //                     {currentChapter.choices.length < 3 && (
// //                         <button type="button" onClick={addChoice}>
// //                             Add Choice
// //                         </button>
// //                     )}
// //                     <button type="submit">
// //                         {chapterIndexToEdit !== null ? 'Save Changes' : 'Save Chapter'}
// //                     </button>
// //                 </form>
// //             </Modal>

// //             <Modal
// //                 isOpen={isChoiceModalOpen}
// //                 onRequestClose={() => setIsChoiceModalOpen(false)}
// //                 className="modal"
// //                 overlayClassName="overlay"
// //             >
// //                 <h2>Add New Chapter for Choice</h2>
// //                 <form onSubmit={handleChoiceSubmit}>
// //                     <label htmlFor="chapterTitle">Title:</label>
// //                     <input
// //                         type="text"
// //                         id="chapterTitle"
// //                         value={currentChapter.title}
// //                         onChange={(e) => handleChapterChange('title', e.target.value)}
// //                         required
// //                     />
// //                     <label htmlFor="chapterContent">Content:</label>
// //                     <textarea
// //                         id="chapterContent"
// //                         value={currentChapter.content}
// //                         onChange={(e) => handleChapterChange('content', e.target.value)}
// //                         required
// //                     />
// //                     <label>
// //                         <input
// //                             type="checkbox"
// //                             checked={currentChapter.isEnd}
// //                             onChange={(e) => handleChapterChange('isEnd', e.target.checked)}
// //                         />
// //                         Ends Story
// //                     </label>

// //                     {currentChapter.choices.map((choice, index) => (
// //                         <div key={index}>
// //                             <input
// //                                 type="text"
// //                                 value={choice.choiceText}
// //                                 onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
// //                                 placeholder="Choice Text"
// //                                 required
// //                             />
// //                             <button type="button" onClick={() => removeChoice(index)}>
// //                                 Remove Choice
// //                             </button>
// //                         </div>
// //                     ))}
// //                     {currentChapter.choices.length < 3 && (
// //                         <button type="button" onClick={addChoice}>
// //                             Add Choice
// //                         </button>
// //                     )}
// //                     <button type="submit">Save Chapter</button>
// //                 </form>
// //             </Modal>
// //         </div>
// //     );
// // }

// // export default CreateStory;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_STORY } from '../../utils/mutations';
// import Modal from 'react-modal';
// import './CreateStory.css';
// import Auth from '../../utils/auth';
// import UploadImage from '../UploadImage/UploadImage';

// Modal.setAppElement('#root');

// function CreateStory() {
//     const [addStory, { error }] = useMutation(ADD_STORY);
//     const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
//     const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
//     const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
//     const [hasStartedStory, setHasStartedStory] = useState(false);
//     const [storyTitle, setStoryTitle] = useState('');
//     const [storyDescription, setStoryDescription] = useState('');
//     const [storyImage, setStoryImage] = useState('');
//     const [storyGenre, setStoryGenre] = useState('');
//     const [storyTags, setStoryTags] = useState('');
//     const [chapters, setChapters] = useState([]);
//     const [currentChapter, setCurrentChapter] = useState({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
//     const [chapterIndexToEdit, setChapterIndexToEdit] = useState(null);
//     const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);

//     const navigate = useNavigate();

//     const handleStoryTitleChange = (event) => {
//         setStoryTitle(event.target.value);
//     };

//     const handleStoryDescriptionChange = (event) => {
//         setStoryDescription(event.target.value);
//     };

//     const handleStoryImageChange = (url) => {
//         setStoryImage(url);
//     };

//     const handleStoryGenreChange = (event) => {
//         setStoryGenre(event.target.value);
//     };

//     const handleStoryTagsChange = (event) => {
//         setStoryTags(event.target.value);
//     };

//     const handleChapterChange = (field, value) => {
//         setCurrentChapter((prevState) => ({
//             ...prevState,
//             [field]: value,
//         }));
//     };

//     const handleChoiceChange = (index, field, value) => {
//         const newChoices = [...currentChapter.choices];
//         newChoices[index][field] = value;
//         setCurrentChapter((prevState) => ({
//             ...prevState,
//             choices: newChoices,
//         }));
//     };

//     const addChoice = () => {
//         if (currentChapter.choices.length < 3) {
//             setCurrentChapter((prevState) => ({
//                 ...prevState,
//                 choices: [...prevState.choices, { choiceText: '', nextChapterIndex: null }],
//             }));
//         } else {
//             alert('You can only add up to three choices.');
//         }
//     };

//     const removeChoice = (index) => {
//         const newChoices = [...currentChapter.choices];
//         newChoices.splice(index, 1);
//         setCurrentChapter((prevState) => ({
//             ...prevState,
//             choices: newChoices,
//         }));
//     };

//     const handleInitialSubmit = (event) => {
//         event.preventDefault();
//         setIsInitialModalOpen(false);
//         setIsChapterModalOpen(true);
//         setHasStartedStory(true);
//     };

//     const handleChapterSubmit = (event) => {
//         event.preventDefault();

//         const newChapter = {
//             title: currentChapter.title,
//             content: currentChapter.content,
//             isEnd: currentChapter.isEnd,
//             choices: currentChapter.choices,
//         };

//         if (chapterIndexToEdit !== null) {
//             const updatedChapters = [...chapters];
//             updatedChapters[chapterIndexToEdit] = newChapter;
//             setChapters(updatedChapters);
//         } else {
//             setChapters([...chapters, newChapter]);
//         }

//         setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
//         setIsChapterModalOpen(false);
//         setChapterIndexToEdit(null);
//     };

//     const handleChoiceSubmit = (event) => {
//         event.preventDefault();

//         const newChapter = {
//             title: currentChapter.title,
//             content: currentChapter.content,
//             isEnd: currentChapter.isEnd,
//             choices: currentChapter.choices,
//         };

//         const updatedChapters = [...chapters];
//         updatedChapters[chapters.length] = newChapter;

//         const parentChapterIndex = currentChoiceIndex.parentChapterIndex;
//         const parentChoiceIndex = currentChoiceIndex.parentChoiceIndex;
//         updatedChapters[parentChapterIndex].choices[parentChoiceIndex].nextChapterIndex = chapters.length;

//         setChapters(updatedChapters);

//         setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
//         setIsChoiceModalOpen(false);
//         setCurrentChoiceIndex(null);
//     };

//     const addNewChapterForChoice = (parentChapterIndex, parentChoiceIndex) => {
//         setCurrentChoiceIndex({ parentChapterIndex, parentChoiceIndex });
//         setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
//         setIsChoiceModalOpen(true);
//     };

//     const editChapter = (index) => {
//         const chapterToEdit = chapters[index];

//         setCurrentChapter({
//             title: chapterToEdit.title,
//             content: chapterToEdit.content,
//             isEnd: chapterToEdit.isEnd,
//             choices: chapterToEdit.choices,
//         });
//         setChapterIndexToEdit(index);
//         setIsChapterModalOpen(true);
//     };

//     const finalizeStory = async () => {
//         try {
//             const profile = await Auth.getProfile();
//             const userId = profile.data._id;
//             const author = profile.data.username;

//             const storyInput = {
//                 title: storyTitle,
//                 author,
//                 description: storyDescription,
//                 imageUrl: storyImage,
//                 genre: storyGenre,
//                 tags: storyTags,
//                 chapters,
//             };

//             const storyData = await addStory({
//                 variables: { storyInput },
//             });

//             if (storyData) {
//                 navigate(`/story-index/${storyData.data.addStory._id}`);
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const renderChapters = (chapterIndex, depth = 0) => {
//         const chapter = chapters[chapterIndex];
//         if (!chapter) return null;

//         const indentClass = `indent-${depth}`;

//         return (
//             <div className={`chapter-wrapper ${indentClass}`} key={chapterIndex}>
//                 <button onClick={() => editChapter(chapterIndex)}>
//                     {chapter.title}
//                 </button>
//                 <div>
//                     {chapter.choices.map((choice, choiceIndex) => (
//                         <div key={choiceIndex} className={`indent-${depth + 1}`}>
//                             <button onClick={() => addNewChapterForChoice(chapterIndex, choiceIndex)}>
//                                 {choice.choiceText || `Choice ${choiceIndex + 1}`}
//                             </button>
//                             {chapter.isEnd && <span> (End)</span>}
//                             {choice.nextChapterIndex !== null && (
//                                 <span>
//                                     {` -> Chapter ${choice.nextChapterIndex + 1}`}
//                                     {renderChapters(choice.nextChapterIndex, depth + 1)}
//                                 </span>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="create-story-container">
//             <div className="create-story-content">
//                 {!hasStartedStory && (
//                     <button className="create-story-button" onClick={() => setIsInitialModalOpen(true)}>
//                         Create Story
//                     </button>
//                 )}
//                 <div className="chapter-container">
//                     {chapters.length > 0 && renderChapters(0)}
//                 </div>
//                 {chapters.length > 0 && (
//                     <button className="finalize-story-button" onClick={finalizeStory}>
//                         Finalize Story
//                     </button>
//                 )}
//             </div>

//             <Modal
//                 isOpen={isInitialModalOpen}
//                 onRequestClose={() => setIsInitialModalOpen(false)}
//                 className="modal"
//                 overlayClassName="overlay"
//             >
//                 <h2>Start Your Story</h2>
//                 <form onSubmit={handleInitialSubmit}>
//                     <label htmlFor="storyTitle">Story Title:</label>
//                     <input
//                         type="text"
//                         id="storyTitle"
//                         value={storyTitle}
//                         onChange={handleStoryTitleChange}
//                         required
//                     />

//                     <label htmlFor="storyDescription">Brief Description:</label>
//                     <textarea
//                         id="storyDescription"
//                         value={storyDescription}
//                         onChange={handleStoryDescriptionChange}
//                         required
//                     />

//                     <label htmlFor="storyImage">Story Image:</label>
//                     <UploadImage setImageUrl={handleStoryImageChange} />

//                     <label htmlFor="storyGenre">Genre:</label>
//                     <input
//                         type="text"
//                         id="storyGenre"
//                         value={storyGenre}
//                         onChange={handleStoryGenreChange}
//                         required
//                     />

//                     <label htmlFor="storyTags">Tags (comma-separated):</label>
//                     <input
//                         type="text"
//                         id="storyTags"
//                         value={storyTags}
//                         onChange={handleStoryTagsChange}
//                         required
//                     />

//                     <button type="submit">Next</button>
//                 </form>
//             </Modal>

//             <Modal
//                 isOpen={isChapterModalOpen}
//                 onRequestClose={() => setIsChapterModalOpen(false)}
//                 className="modal"
//                 overlayClassName="overlay"
//             >
//                 <h2>{chapterIndexToEdit !== null ? 'Edit Chapter' : 'Add New Chapter'}</h2>
//                 <form onSubmit={handleChapterSubmit}>
//                     <label htmlFor="chapterTitle">Title:</label>
//                     <input
//                         type="text"
//                         id="chapterTitle"
//                         value={currentChapter.title}
//                         onChange={(e) => handleChapterChange('title', e.target.value)}
//                         required
//                     />
//                     <label htmlFor="chapterContent">Content:</label>
//                     <textarea
//                         id="chapterContent"
//                         value={currentChapter.content}
//                         onChange={(e) => handleChapterChange('content', e.target.value)}
//                         required
//                     />
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={currentChapter.isEnd}
//                             onChange={(e) => handleChapterChange('isEnd', e.target.checked)}
//                         />
//                         Ends Story
//                     </label>

//                     {currentChapter.choices.map((choice, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={choice.choiceText}
//                                 onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
//                                 placeholder="Choice Text"
//                                 required
//                             />
//                             <button type="button" onClick={() => removeChoice(index)}>
//                                 Remove Choice
//                             </button>
//                         </div>
//                     ))}
//                     {currentChapter.choices.length < 3 && (
//                         <button type="button" onClick={addChoice}>
//                             Add Choice
//                         </button>
//                     )}
//                     <button type="submit">
//                         {chapterIndexToEdit !== null ? 'Save Changes' : 'Save Chapter'}
//                     </button>
//                 </form>
//             </Modal>

//             <Modal
//                 isOpen={isChoiceModalOpen}
//                 onRequestClose={() => setIsChoiceModalOpen(false)}
//                 className="modal"
//                 overlayClassName="overlay"
//             >
//                 <h2>Add New Chapter for Choice</h2>
//                 <form onSubmit={handleChoiceSubmit}>
//                     <label htmlFor="chapterTitle">Title:</label>
//                     <input
//                         type="text"
//                         id="chapterTitle"
//                         value={currentChapter.title}
//                         onChange={(e) => handleChapterChange('title', e.target.value)}
//                         required
//                     />
//                     <label htmlFor="chapterContent">Content:</label>
//                     <textarea
//                         id="chapterContent"
//                         value={currentChapter.content}
//                         onChange={(e) => handleChapterChange('content', e.target.value)}
//                         required
//                     />
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={currentChapter.isEnd}
//                             onChange={(e) => handleChapterChange('isEnd', e.target.checked)}
//                         />
//                         Ends Story
//                     </label>

//                     {currentChapter.choices.map((choice, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={choice.choiceText}
//                                 onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
//                                 placeholder="Choice Text"
//                                 required
//                             />
//                             <button type="button" onClick={() => removeChoice(index)}>
//                                 Remove Choice
//                             </button>
//                         </div>
//                     ))}
//                     {currentChapter.choices.length < 3 && (
//                         <button type="button" onClick={addChoice}>
//                             Add Choice
//                         </button>
//                     )}
//                     <button type="submit">Save Chapter</button>
//                 </form>
//             </Modal>
//         </div>
//     );
// }

// export default CreateStory;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../../utils/mutations';
import Modal from 'react-modal';
import './CreateStory.css';
import Auth from '../../utils/auth';
import UploadImage from '../UploadImage/UploadImage';

Modal.setAppElement('#root');

function CreateStory() {
    const [addStory, { error }] = useMutation(ADD_STORY);
    const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
    const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
    const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
    const [hasStartedStory, setHasStartedStory] = useState(false);
    const [storyTitle, setStoryTitle] = useState('');
    const [storyDescription, setStoryDescription] = useState('');
    const [storyImage, setStoryImage] = useState(''); // This will hold the URL
    const [storyGenre, setStoryGenre] = useState('');
    const [storyTags, setStoryTags] = useState('');
    const [chapters, setChapters] = useState([]);
    const [currentChapter, setCurrentChapter] = useState({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
    const [chapterIndexToEdit, setChapterIndexToEdit] = useState(null);
    const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);

    const navigate = useNavigate();

    const handleStoryTitleChange = (event) => {
        setStoryTitle(event.target.value);
    };

    const handleStoryDescriptionChange = (event) => {
        setStoryDescription(event.target.value);
    };

    const handleStoryImageChange = (url) => {
        setStoryImage(url); // Set the image URL from the UploadImage component
    };

    const handleStoryGenreChange = (event) => {
        setStoryGenre(event.target.value);
    };

    const handleStoryTagsChange = (event) => {
        setStoryTags(event.target.value);
    };

    const handleChapterChange = (field, value) => {
        setCurrentChapter((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleChoiceChange = (index, field, value) => {
        const newChoices = [...currentChapter.choices];
        newChoices[index][field] = value;
        setCurrentChapter((prevState) => ({
            ...prevState,
            choices: newChoices,
        }));
    };

    const addChoice = () => {
        if (currentChapter.choices.length < 3) {
            setCurrentChapter((prevState) => ({
                ...prevState,
                choices: [...prevState.choices, { choiceText: '', nextChapterIndex: null }],
            }));
        } else {
            alert('You can only add up to three choices.');
        }
    };

    const removeChoice = (index) => {
        const newChoices = [...currentChapter.choices];
        newChoices.splice(index, 1);
        setCurrentChapter((prevState) => ({
            ...prevState,
            choices: newChoices,
        }));
    };

    const handleInitialSubmit = (event) => {
        event.preventDefault();
        setIsInitialModalOpen(false);
        setIsChapterModalOpen(true);
        setHasStartedStory(true);
    };

    const handleChapterSubmit = (event) => {
        event.preventDefault();

        const newChapter = {
            title: currentChapter.title,
            content: currentChapter.content,
            isEnd: currentChapter.isEnd,
            choices: currentChapter.choices,
        };

        if (chapterIndexToEdit !== null) {
            const updatedChapters = [...chapters];
            updatedChapters[chapterIndexToEdit] = newChapter;
            setChapters(updatedChapters);
        } else {
            setChapters([...chapters, newChapter]);
        }

        setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
        setIsChapterModalOpen(false);
        setChapterIndexToEdit(null);
    };

    const handleChoiceSubmit = (event) => {
        event.preventDefault();

        const newChapter = {
            title: currentChapter.title,
            content: currentChapter.content,
            isEnd: currentChapter.isEnd,
            choices: currentChapter.choices,
        };

        const updatedChapters = [...chapters];
        updatedChapters[chapters.length] = newChapter;

        const parentChapterIndex = currentChoiceIndex.parentChapterIndex;
        const parentChoiceIndex = currentChoiceIndex.parentChoiceIndex;
        updatedChapters[parentChapterIndex].choices[parentChoiceIndex].nextChapterIndex = chapters.length;

        setChapters(updatedChapters);

        setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
        setIsChoiceModalOpen(false);
        setCurrentChoiceIndex(null);
    };

    const addNewChapterForChoice = (parentChapterIndex, parentChoiceIndex) => {
        setCurrentChoiceIndex({ parentChapterIndex, parentChoiceIndex });
        setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
        setIsChoiceModalOpen(true);
    };

    const editChapter = (index) => {
        const chapterToEdit = chapters[index];

        setCurrentChapter({
            title: chapterToEdit.title,
            content: chapterToEdit.content,
            isEnd: chapterToEdit.isEnd,
            choices: chapterToEdit.choices,
        });
        setChapterIndexToEdit(index);
        setIsChapterModalOpen(true);
    };

    const finalizeStory = async () => {
        try {
            const profile = await Auth.getProfile();
            const userId = profile.data._id;
            const author = profile.data.username;

            const storyInput = {
                title: storyTitle,
                author,
                description: storyDescription,
                imageUrl: storyImage, // Ensure the imageUrl is set
                genre: storyGenre,
                tags: storyTags,
                chapters,
            };

            const storyData = await addStory({
                variables: { storyInput },
            });

            if (storyData) {
                navigate(`/story-index/${storyData.data.addStory._id}`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const renderChapters = (chapterIndex, depth = 0) => {
        const chapter = chapters[chapterIndex];
        if (!chapter) return null;

        const indentClass = `indent-${depth}`;

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
        <div className="create-story-container">
            <div className="create-story-content">
                {!hasStartedStory && (
                    <button className="create-story-button" onClick={() => setIsInitialModalOpen(true)}>
                        Create Story
                    </button>
                )}
                <div className="chapter-container">
                    {chapters.length > 0 && renderChapters(0)}
                </div>
                {chapters.length > 0 && (
                    <button className="finalize-story-button" onClick={finalizeStory}>
                        Finalize Story
                    </button>
                )}
            </div>

            <Modal
                isOpen={isInitialModalOpen}
                onRequestClose={() => setIsInitialModalOpen(false)}
                className="modal"
                overlayClassName="overlay"
            >
                <h2>Start Your Story</h2>
                <form onSubmit={handleInitialSubmit}>
                    <label htmlFor="storyTitle">Story Title:</label>
                    <input
                        type="text"
                        id="storyTitle"
                        value={storyTitle}
                        onChange={handleStoryTitleChange}
                        required
                    />

                    <label htmlFor="storyDescription">Brief Description:</label>
                    <textarea
                        id="storyDescription"
                        value={storyDescription}
                        onChange={handleStoryDescriptionChange}
                        required
                    />

                    <label htmlFor="storyImage">Story Image:</label>
                    <UploadImage setImageUrl={handleStoryImageChange} />

                    <label htmlFor="storyGenre">Genre:</label>
                    <input
                        type="text"
                        id="storyGenre"
                        value={storyGenre}
                        onChange={handleStoryGenreChange}
                        required
                    />

                    <label htmlFor="storyTags">Tags (comma-separated):</label>
                    <input
                        type="text"
                        id="storyTags"
                        value={storyTags}
                        onChange={handleStoryTagsChange}
                        required
                    />

                    <button type="submit">Next</button>
                </form>
            </Modal>

            <Modal
                isOpen={isChapterModalOpen}
                onRequestClose={() => setIsChapterModalOpen(false)}
                className="modal"
                overlayClassName="overlay"
            >
                <h2>{chapterIndexToEdit !== null ? 'Edit Chapter' : 'Add New Chapter'}</h2>
                <form onSubmit={handleChapterSubmit}>
                    <label htmlFor="chapterTitle">Title:</label>
                    <input
                        type="text"
                        id="chapterTitle"
                        value={currentChapter.title}
                        onChange={(e) => handleChapterChange('title', e.target.value)}
                        required
                    />
                    <label htmlFor="chapterContent">Content:</label>
                    <textarea
                        id="chapterContent"
                        value={currentChapter.content}
                        onChange={(e) => handleChapterChange('content', e.target.value)}
                        required
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={currentChapter.isEnd}
                            onChange={(e) => handleChapterChange('isEnd', e.target.checked)}
                        />
                        Ends Story
                    </label>

                    {currentChapter.choices.map((choice, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={choice.choiceText}
                                onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
                                placeholder="Choice Text"
                                required
                            />
                            <button type="button" onClick={() => removeChoice(index)}>
                                Remove Choice
                            </button>
                        </div>
                    ))}
                    {currentChapter.choices.length < 3 && (
                        <button type="button" onClick={addChoice}>
                            Add Choice
                        </button>
                    )}
                    <button type="submit">
                        {chapterIndexToEdit !== null ? 'Save Changes' : 'Save Chapter'}
                    </button>
                </form>
            </Modal>

            <Modal
                isOpen={isChoiceModalOpen}
                onRequestClose={() => setIsChoiceModalOpen(false)}
                className="modal"
                overlayClassName="overlay"
            >
                <h2>Add New Chapter for Choice</h2>
                <form onSubmit={handleChoiceSubmit}>
                    <label htmlFor="chapterTitle">Title:</label>
                    <input
                        type="text"
                        id="chapterTitle"
                        value={currentChapter.title}
                        onChange={(e) => handleChapterChange('title', e.target.value)}
                        required
                    />
                    <label htmlFor="chapterContent">Content:</label>
                    <textarea
                        id="chapterContent"
                        value={currentChapter.content}
                        onChange={(e) => handleChapterChange('content', e.target.value)}
                        required
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={currentChapter.isEnd}
                            onChange={(e) => handleChapterChange('isEnd', e.target.checked)}
                        />
                        Ends Story
                    </label>

                    {currentChapter.choices.map((choice, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={choice.choiceText}
                                onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
                                placeholder="Choice Text"
                                required
                            />
                            <button type="button" onClick={() => removeChoice(index)}>
                                Remove Choice
                            </button>
                        </div>
                    ))}
                    {currentChapter.choices.length < 3 && (
                        <button type="button" onClick={addChoice}>
                            Add Choice
                        </button>
                    )}
                    <button type="submit">Save Chapter</button>
                </form>
            </Modal>
        </div>
    );
}

export default CreateStory;
