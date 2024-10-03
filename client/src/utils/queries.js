import { gql } from '@apollo/client';

// Query to get the user's profile.
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

// Query to get the basic metadata for all stories. 
export const GET_STORIES = gql`
  query GET_STORIES {
    stories {
      _id
      title
      description
      imageUrl
    }
  }
`;

// Query to get all of the data for one story.
export const GET_STORY = gql`
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
        fullName
        rating
        reviewText
        createdAtFormattedDate
      }
      averageRating
      ratingsCount
    }
  }
`;
