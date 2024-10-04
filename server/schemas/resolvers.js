const { User, Story, Chapter, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {

    // Find the user's profile using context, and populate their created, bookmarked, and toBeRead stories.
    profile: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .populate([
            { path: 'createdStories' },
            { path: 'bookmarkedStories' }, 
            { path: 'toBeReadStories' }
          ]);
        return userData;
      }
      throw AuthenticationError;
    },

    // Find all stories for displaying at /myth-index.
    stories: async () => {
      try {
        const stories = await Story.find();
        return stories;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    // Obtain story data with the reviews, chapters, and choices populated.
    story: async (parent, { storyId }) => {
      try {
        const story = await Story.findOne({ _id: storyId })
          .populate({
            path: 'reviews',
          })
          .populate({
            path: 'chapters',
            populate: {
              path: 'choices'
            },
          });
        return story;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },

  Mutation: {

    // Sign the user up and create and sign a token for them.
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    // Login mutation which finds the user by email, checks if the provided password was correct, and signs a jwt if credentials were valid
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    // Create a story and add it to the user's createdStories array.
    addStory: async (parent, { input }, context) => {
      try {
        if (!context.user) {
          throw AuthenticationError;
        }

        const chapterObjectIds = [];
        const chaptersWithIndex = input.chapters.map((chapter, index) => ({
          ...chapter,
          chapterIndex: index // Adding the index of the chapter as chapterIndex.
        }));

        // Iterate over the chapters with added index and create each chapter in the database.
        for (const chapter of chaptersWithIndex) {
          const newChapter = await Chapter.create(chapter);
          chapterObjectIds.push(newChapter._id);
        }

        const story = await Story.create({
          title: input.title,
          author: input.author,
          description: input.description,
          imageUrl: input.imageUrl,
          genre: input.genre,
          tags: input.tags,
          chapters: chapterObjectIds
        });

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { 'createdStories': story._id } },
          { new: true }
        )

        const createdStory = await Story.findById(story._id)
          .populate('chapters')
          .populate('reviews')
          .exec();

        // Return the createdStory with chapters and reviews populated.
        return createdStory;
      } catch (err) {
        console.error(err);
        throw new Error('There was an error when attempting to add a new story.');
      }
    },

    // Delete a story and remove it from the user's createdStories array.
    deleteStory: async (parent, { storyId }, context) => {
      if (context.user) {
        const storyForDeletion = await Story.findOneAndDelete({ _id: storyId });

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { 'createdStories': storyId } },
          { new: true }
        ).populate([
          { path: 'createdStories' },
          { path: 'bookmarkedStories' },
          { path: 'toBeReadStories' }
        ]);

        return updatedUser;
      }
      throw AuthenticationError;
    },

    // Add a story to the user's toBeReadStories and return the updated user.
    addToTBR: async (parent, { storyId }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { 'toBeReadStories': storyId } },
          { new: true }
        ).populate([
          { path: 'createdStories' },
          { path: 'bookmarkedStories' },
          { path: 'toBeReadStories' }
        ]);

        return updatedUser;
      } catch (err) {
        throw new Error(err);
      }
    },

    // Remove a story from the user's toBeReadStories, returning the updated user.
    removeFromTBR: async (parent, { storyId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { 'toBeReadStories': storyId } },
          { new: true }
        ).populate([
          { path: 'createdStories' },
          { path: 'bookmarkedStories' },
          { path: 'toBeReadStories' }
        ]);

        return updatedUser;
      }
      throw AuthenticationError;
    },

    // Add a story to the user's bookmarkedStories.
    addToBookmarks: async (parent, { storyId }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { 'bookmarkedStories': storyId } },
          { new: true }
        ).populate([
          { path: 'createdStories' },
          { path: 'bookmarkedStories' },
          { path: 'toBeReadStories' }
        ]);

        return updatedUser;
      } catch (err) {
        throw new Error(err);
      }
    },

    // Remove a story from the user's bookmarkedStories.
    removeFromBookmarks: async (parent, { storyId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { 'bookmarkedStories': storyId } },
          { new: true }
        ).populate([
          { path: 'createdStories' },
          { path: 'bookmarkedStories' },
          { path: 'toBeReadStories' }
        ]);

        return updatedUser;
      }
      throw AuthenticationError;
    },

    // Create a review, add it to the appropriate story, and return the review. 
    addReview: async (parent, { input }, context) => {
      const rating = parseInt(input.rating);

      try {
        const review = await Review.create({
          username: input.username,
          fullName: input.fullName,
          rating: rating,
          reviewText: input.reviewText,
        });

        const updatedStory = await Story.findOneAndUpdate(
          { _id: input.storyId },
          { $addToSet: { reviews: review._id } },
          { new: true }
        );
        return review;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = resolvers;
