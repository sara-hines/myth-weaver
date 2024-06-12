const { Schema } = require('mongoose');

const choiceSchema = new Schema(
  {
    choiceText: {
      type: String,
      required: true,
    },
    // nextChapterIndex, in the CreateStory.jsx logic and seed data, is the chapterIndex of the chapter which follows if the user selects this particular choice.
    nextChapterIndex: {
      type: Number,
    },
  },
);

module.exports = choiceSchema;