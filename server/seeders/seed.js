const db = require('../config/connection');
const { User, Story, Chapter, Review } = require('../models');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');
const story1seeds = require('./story1seeds.js');
const story2seeds = require('./story2seeds.js');
const story3seeds = require('./story3seeds.js');
const story4seeds = require('./story4seeds.js');

// Importing the new story seeds
const neonAbyssSeeds = require('./neonAbyssStory.js');
const dragonsPactStory = require('./dragonsPactStory.js');
const echoesOfElaria = require('./echosOfElaria.js');
const theGoldenSpoon = require('./theGoldenSpoon.js');
const taleOfArinthia = require('./taleOfArinthia.js');

db.once('open', async () => {
    try {
        await cleanDB('Review', 'reviews');
        await cleanDB('Chapter', 'chapters');
        await cleanDB('Story', 'stories');
        await cleanDB('User', 'users');

        await User.create(userSeeds);

        // existing stories
        await addStory(story1seeds.title, story1seeds.author, story1seeds.description, story1seeds.imageUrl, story1seeds.genre, story1seeds.tags, story1seeds.chapters);
        await addStory(story2seeds.title, story2seeds.author, story2seeds.description, story2seeds.imageUrl, story2seeds.genre, story2seeds.tags, story2seeds.chapters);
        await addStory(story3seeds.title, story3seeds.author, story3seeds.description, story3seeds.imageUrl, story3seeds.genre, story3seeds.tags, story3seeds.chapters);
        await addStory(story4seeds.title, story4seeds.author, story4seeds.description, story4seeds.imageUrl, story4seeds.genre, story4seeds.tags, story4seeds.chapters);

        // new stories
        await addStory(neonAbyssSeeds.title, neonAbyssSeeds.author, neonAbyssSeeds.description, neonAbyssSeeds.imageUrl, neonAbyssSeeds.genre, neonAbyssSeeds.tags, neonAbyssSeeds.chapters);
        await addStory(dragonsPactStory.title, dragonsPactStory.author, dragonsPactStory.description, dragonsPactStory.imageUrl, dragonsPactStory.genre, dragonsPactStory.tags, dragonsPactStory.chapters);
        await addStory(echoesOfElaria.title, echoesOfElaria.author, echoesOfElaria.description, echoesOfElaria.imageUrl, echoesOfElaria.genre, echoesOfElaria.tags, echoesOfElaria.chapters);
        await addStory(theGoldenSpoon.title, theGoldenSpoon.author, theGoldenSpoon.description, theGoldenSpoon.imageUrl, theGoldenSpoon.genre, theGoldenSpoon.tags, theGoldenSpoon.chapters);
        await addStory(taleOfArinthia.title, taleOfArinthia.author, taleOfArinthia.description, taleOfArinthia.imageUrl, taleOfArinthia.genre, taleOfArinthia.tags, taleOfArinthia.chapters);

        console.log('all done!');
        process.exit(0);

    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
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

    const storySeed = await Story.create(storyInput);

    console.log('This is your storySeed:');
    console.log(storySeed);

    const updatedUser = await User.findOneAndUpdate(
        { username: author },
        { $addToSet: { 'authorInfo.createdStories': storySeed._id } },
        { new: true }
    );
}
