import { gql } from '@apollo/client';

// Functionality for a user to be added to the db and associated with a token
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token 
            user {
                _id
                username
            }
        }
    }
`;

// Functionality for a user to log in and be associated with a token
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token 
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_STORY = gql`
    mutation addStory($storyInput: StoryInput!) {
        addStory(input: $storyInput) {
            _id 
            title
            author
            description
            imageUrl
            genre
            tags
            publishedDate
            chapters {
                _id
                chapterIndex
                title
                content
                isEnd
                choices {
                    choiceText
                    nextChapterIndex
                }
            }
        }
    }
`;

export const DELETE_STORY = gql`
    mutation deleteStory($storyId: ID!) {
        deleteStory(storyId: $storyId) {
            _id
            username
            email
            authorInfo {
                createdStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
            readerInfo {
                bookmarkedStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
                toBeReadStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
        }
    }
`;

export const ADD_TO_TBR = gql`
    mutation addToTBR($storyId: ID!) {
        addToTBR(storyId: $storyId) {
            _id
            username
            authorInfo {
                createdStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
            readerInfo {
                bookmarkedStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
                toBeReadStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
        }
    }
`;

export const REMOVE_FROM_TBR = gql`
    mutation removeFromTBR($storyId: ID!) {
        removeFromTBR(storyId: $storyId) {
            _id
            username
            authorInfo {
                createdStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
            readerInfo {
                bookmarkedStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
                toBeReadStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
        }
    }
`;

export const ADD_TO_BOOKMARKS = gql`
    mutation addToBookmarks($storyId: ID!) {
        addToBookmarks(storyId: $storyId) {
            _id
            username
            authorInfo {
                createdStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
            readerInfo {
                bookmarkedStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
                toBeReadStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
        }
    }
`;

export const REMOVE_FROM_BOOKMARKS = gql`
    mutation removeFromBookmarks($storyId: ID!) {
        removeFromBookmarks(storyId: $storyId) {
            _id
            username
            authorInfo {
                createdStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
            readerInfo {
                bookmarkedStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
                toBeReadStories {
                    _id
                    title
                    author
                    description
                    imageUrl
                    genre
                    tags
                    publishedDate
                    averageRating
                    ratingsCount
                }
            }
        }
    }
`;

export const ADD_REVIEW = gql`
    mutation addReview($reviewInput: ReviewInput!) {
        addReview(input: $reviewInput) {
            _id
            username
            rating
            reviewText
            createdAtFormattedDate
        }
    }
`;