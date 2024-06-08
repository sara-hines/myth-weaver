const db = require('../config/connection');
const { User, Story, Chapter, Review } = require('../models');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');
const story1seeds = require('./story1seeds.js');
const story2seeds = require('./story2seeds.js');
const story3seeds = require('./story3seeds.js');
const story4seeds = require('./story4seeds.js');
// const story5seeds = require('./story5seeds.js');
// const story6seeds = require('./story6seeds.js');
// const story7seeds = require('./story7seeds.js');
// const story8seeds = require('./story8seeds.js');

db.once('open', async () => {
    try {
        // await cleanDB('Counter_stepId', 'counters');
        await cleanDB('Review', 'reviews');
        await cleanDB('Chapter', 'chapters');
        await cleanDB('Story', 'stories');
        await cleanDB('User', 'users');

        await User.create(userSeeds);

        await addStory(story1seeds.title, story1seeds.author, story1seeds.description, story1seeds.imageUrl, story1seeds.genre, story1seeds.tags, story1seeds.chapters);

        await addStory(story2seeds.title, story2seeds.author, story2seeds.description, story2seeds.imageUrl, story2seeds.genre, story2seeds.tags, story2seeds.chapters);

        await addStory(story3seeds.title, story3seeds.author, story3seeds.description, story3seeds.imageUrl, story3seeds.genre, story3seeds.tags, story3seeds.chapters);

        await addStory(story4seeds.title, story4seeds.author, story4seeds.description, story4seeds.imageUrl, story4seeds.genre, story4seeds.tags, story4seeds.chapters);

        // await addStory(story5seeds.title, story5seeds.author, story5seeds.description, story5seeds.imageUrl, story5seeds.genre, story5seeds.tags, story5seeds.chapters);

        // await addStory(story6seeds.title, story6seeds.author, story6seeds.description, story6seeds.imageUrl, story6seeds.genre, story6seeds.tags, story6seeds.chapters);

        // await addStory(story7seeds.title, story7seeds.author, story7seeds.description, story7seeds.imageUrl, story7seeds.genre, story7seeds.tags, story7seeds.chapters);

        // await addStory(story8seeds.title, story8seeds.author, story8seeds.description, story8seeds.imageUrl, story8seeds.genre, story8seeds.tags, story8seeds.chapters);

        console.log('all done!');
        process.exit(0);

    } catch (err) {
        throw err;
    }
});

const addStory = async (title, author, description, imageUrl, genre, tags, chapters) => {

    console.log('these are your chapters from within the addStory function in seed.js:')
    console.log(chapters);
    const chapterObjectIds = [];

    for (const chapter of chapters) {
        const newChapter = await Chapter.create(chapter);
        console.log('this is your newChapter variable from inside addStory of seed.js:')
        console.log(newChapter);
        chapterObjectIds.push(newChapter._id);
        console.log('this is your chapterObjectIds variable from inside of the for of in addStory of seed.js:');
        console.log(chapterObjectIds);
    }

    const storyInput = {
        title,
        author,
        description,
        imageUrl,
        genre,
        tags: [...tags],
        chapters: [...chapterObjectIds]
    }
    // const storySeed = await Story.create({
    //     title,
    //     author,
    //     description,
    //     imageUrl,
    //     genre,
    //     tags: [...tags],
    //     chapters: [...chapterObjectIds]
    // });
    
    const storySeed = await Story.create(storyInput);

    console.log('This is your storySeed:');
    console.log(storySeed);

    const updatedUser = await User.findOneAndUpdate(
        { username: author },
        { $addToSet: { 'authorInfo.createdStories': storySeed._id } },
        { new: true }
    );
}