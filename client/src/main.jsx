import ReactDOM from 'react-dom/client'; // Correct import for createRoot
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Tree from './components/Tree/index.jsx;'

import App from './App.jsx';
import Layout from './components/Layout/Layout.jsx';
import NoHeaderLayout from './components/Layout/NoHeaderLayout.jsx'
import MythIndex from './components/MythIndex/MythIndex.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import StoryIndex from './components/StoryIndex/StoryIndex.jsx';
import StorySplash from './components/StorySplash/StorySplash.jsx';
import CreateStory from './components/CreateStory/CreateStory.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import StoryPath from './components/StoryPath/StoryPath.jsx';
import StoryEnd from './components/StoryEnd/StoryEnd.jsx';
import StoryReview from './components/StoryReview/StoryReview.jsx';
import Landing from './components/LandingPage/landing.jsx';
import CreateStoryTest from './components/CreateStoryTest/CreateStoryTest.jsx';

// import necessary pages here which will be rendered as elements in the children for react router

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1 className='display-2'>Wrong page!</h1>,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: 'myth-index',
                        element: <MythIndex />
                    }, {
                        path: 'user-profile',
                        element: <UserProfile />
                    }, {
                        path: 'story-index/:storyId',
                        element: <StoryIndex />
                    }, {
                        path: 'story-splash',
                        element: <StorySplash />
                    }, {
                        path: 'create-story',
                        element: <CreateStory />
                    }, {
                        path: 'about-us',
                        element: <AboutUs />
                    }, {
                        path: 'story-path/:storyId',
                        element: <StoryPath />
                    },
                    // {
                    //     path: 'story-end',
                    //     element: <StoryEnd />
                    // },
                    {
                        path: 'story-review/:storyId',
                        element: <StoryReview />
                    }, {
                        path: 'create-story-test',
                        element: <CreateStoryTest />
                    }
                ],
            },
            {
                element: <NoHeaderLayout />,
                children: [
                    {
                        index: true,
                        element: <Landing />
                    }
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)