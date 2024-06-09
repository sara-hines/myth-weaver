const { User, Story, Chapter, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {

        profile: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .populate({
                        path: 'authorInfo',
                        populate: {
                            path: 'createdStories'
                        },
                    })
                    .populate({
                        path: 'readerInfo',
                        populate: {
                            path: 'bookmarkedStories', 
                            path: 'toBeReadStories'
                        },
                    });
                return userData;
            }
            throw AuthenticationError;
        },

        stories: async () => {
            try {
                const stories = await Story.find()
                // .sort('-createdAt').limit(6);

                return stories;
            } catch (err) {
                console.error(err);
                throw err;
            }

        },

        storiesTest: async () => {
            try {
                const stories = await Story.find()
                    .populate({
                        path: 'reviews',
                        populate: {
                            path: 'username',
                            model: 'User',
                        },
                    })
                    .populate({
                        path: 'chapters',
                        populate: {
                            path: 'choices'
                        },
                    });
                return stories;
            } catch (err) {
                console.error(err);
                throw err;
            }
        },

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
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
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
        addStory: async (parent, { input }, context) => {
            try {
                if (!context.user) {
                    throw AuthenticationError;
                }

                console.log(input);

                const chapterObjectIds = [];
                const chaptersWithIndex = input.chapters.map((chapter, index) => ({
                    ...chapter,
                    chapterIndex: index // Adding the index of the chapter as chapterIndex
                }));

                console.log(chaptersWithIndex);

                // Iterate over the chapters with added index and create each chapter in the database
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

                console.log('The next console log that follows is your story._id from addStory in resolvers.js.')
                console.log(story._id);

                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { 'authorInfo.createdStories': story._id } },
                    { new: true }
                )

                const createdStory = await Story.findById(story._id)
                    .populate('chapters')
                    .populate('reviews')
                    .exec();

                // Finding the created story and populating steps and reviews allows us to make stepId non-nullable while avoiding 'cannot return null for non-nullable field' errors.
                return createdStory;

            } catch (err) {
                console.error(err);
                throw new Error('There was an error when attempting to add a new story.');
            }
        },
        deleteStory: async (parent, { storyId }, context) => {
            if (context.user) {

                const storyForDeletion = await Story.findOneAndDelete({ _id: storyId });

                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { 'authorInfo.createdStories': storyId } },
                    { new: true }
                );
            }
            throw AuthenticationError;
        },
        addToTBR: async (parent, { storyId }, context) => {
            if (!context.user) {
                throw AuthenticationError;
            }

            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { 'readerInfo.toBeReadStories': storyId } },
                    { new: true }
                );

                const userToReturn = await User.findOne({ _id: context.user._id })
                    .populate({
                        path: 'authorInfo',
                        populate: {
                            path: 'createdStories'
                        },
                    })
                    .populate({
                        path: 'readerInfo',
                        populate: {
                            path: 'bookmarkedStories', 
                            path: 'toBeReadStories'
                        },
                    });
                
                return userToReturn;

            } catch (err) {
                throw new Error(err);
            }
        },

        removeFromTBR: async (parent, { storyId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { 'readerInfo.toBeReadStories': storyId } },
                    { new: true }
                );
            }
            throw AuthenticationError;
        },

        addToBookmarks: async (parent, { storyId }, context) => {
            if (!context.user) {
                throw AuthenticationError;
            }

            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { 'readerInfo.bookmarkedStories': storyId } },
                    { new: true }
                ).populate({
                    path: 'readerInfo',
                    populate: {
                        path: 'bookmarkedStories',
                    },
                });

                const userToReturn = await User.findOne({ _id: context.user._id })
                    .populate({
                        path: 'readerInfo',
                        populate: {
                            path: 'bookmarkedStories',
                        },
                    });

                return userToReturn;

                // return updatedUser;
            } catch (err) {
                throw new Error(err);
            }
        },

        removeFromBookmarks: async (parent, { storyId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { 'readerInfo.bookmarkedStories': storyId } },
                    { new: true }
                );
            }
            throw AuthenticationError;
        },

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
