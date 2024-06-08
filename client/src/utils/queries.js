import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
    query GET_PROFILE {
        profile {
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

export const GET_STORIES = gql`
    # For the home page
    query GET_STORIES {
        stories {
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
`;

export const GET_STORIES_TEST = gql`
    # Test to get all data from all stories
    query GET_STORIES_TEST {
        storiesTest {
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
                    _id
                    choiceText
                    nextChapterIndex
                }
            }
            reviews {
                _id
                username
                rating
                reviewText
                createdAtFormattedDate
            }
            averageRating
            ratingsCount
        }
    }
`;

export const GET_STORY = gql`
    # This is currently all the info for 1 story
    query GET_STORY($storyId: ID!) {
        story(storyId: $storyId) {
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
                    _id
                    choiceText
                    nextChapterIndex
                }
            }
            reviews {
                _id
                username
                rating
                reviewText
                createdAtFormattedDate
            }
        }
    }
`;
