const { AuthenticationError } = require('apollo-server-express');
const { User, Story, Chapter, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profile: async (parent, args, context) => {
            if (context.user) {
                return User.findById(context.user._id)
                    .populate({
                        path: 'authorInfo',
                        populate: { path: 'createdStories' },
                    })
                    .populate({
                        path: 'readerInfo',
                        populate: [{ path: 'bookmarkedStories' }, { path: 'toBeReadStories' }],
                    });
            }
            throw new AuthenticationError('Not logged in');
        },
        stories: async () => {
            return Story.find().populate('chapters').populate('reviews');
        },
        story: async (parent, { storyId }) => {
            return Story.findById(storyId).populate('chapters').populate('reviews');
        },
        storiesTest: async () => {
            return Story.find().populate('chapters').populate('reviews');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addStory: async (parent, { input }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            const story = await Story.create({ ...input, author: context.user.username });
            await User.findByIdAndUpdate(context.user._id, { $push: { 'authorInfo.createdStories': story._id } });
            return story;
        },
        deleteStory: async (parent, { storyId }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            try {
                // Find and delete the story
                const story = await Story.findByIdAndDelete(storyId);
                if (!story) {
                    throw new Error('Story not found');
                }

                // Update the user to remove the deleted story from their created stories
                await User.findByIdAndUpdate(context.user._id, { $pull: { 'authorInfo.createdStories': storyId } });

                // Return the updated user
                const updatedUser = await User.findById(context.user._id).populate({
                    path: 'authorInfo',
                    populate: { path: 'createdStories' },
                }).populate({
                    path: 'readerInfo',
                    populate: [{ path: 'bookmarkedStories' }, { path: 'toBeReadStories' }],
                });

                return updatedUser;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to delete story');
            }
        },
        addToTBR: async (parent, { storyId }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            const user = await User.findByIdAndUpdate(context.user._id, { $addToSet: { 'readerInfo.toBeReadStories': storyId } }, { new: true });
            return user.populate({
                path: 'authorInfo',
                populate: { path: 'createdStories' },
            }).populate({
                path: 'readerInfo',
                populate: [{ path: 'bookmarkedStories' }, { path: 'toBeReadStories' }],
            });
        },
        removeFromTBR: async (parent, { storyId }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            const user = await User.findByIdAndUpdate(context.user._id, { $pull: { 'readerInfo.toBeReadStories': storyId } }, { new: true });
            return user.populate({
                path: 'authorInfo',
                populate: { path: 'createdStories' },
            }).populate({
                path: 'readerInfo',
                populate: [{ path: 'bookmarkedStories' }, { path: 'toBeReadStories' }],
            });
        },
        addToBookmarks: async (parent, { storyId }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            const user = await User.findByIdAndUpdate(context.user._id, { $addToSet: { 'readerInfo.bookmarkedStories': storyId } }, { new: true });
            return user.populate({
                path: 'authorInfo',
                populate: { path: 'createdStories' },
            }).populate({
                path: 'readerInfo',
                populate: [{ path: 'bookmarkedStories' }, { path: 'toBeReadStories' }],
            });
        },
        removeFromBookmarks: async (parent, { storyId }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            const user = await User.findByIdAndUpdate(context.user._id, { $pull: { 'readerInfo.bookmarkedStories': storyId } }, { new: true });
            return user.populate({
                path: 'authorInfo',
                populate: { path: 'createdStories' },
            }).populate({
                path: 'readerInfo',
                populate: [{ path: 'bookmarkedStories' }, { path: 'toBeReadStories' }],
            });
        },
        addReview: async (parent, { input }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            const review = await Review.create({ ...input, username: context.user.username });
            await Story.findByIdAndUpdate(input.storyId, { $addToSet: { reviews: review._id } }, { new: true });
            return review;
        },
    },
};

module.exports = resolvers;
