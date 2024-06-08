const { Schema } = require('mongoose');

const choiceSchema = new Schema(
    // Choice doesn't become a model, but it since it is made as an array of subdocuments in the Story model, mongoose will still automatically generate an _id for each choice. 
    {
        choiceText: {
            type: String,
            required: true,
        },
        // the custom stepId of the next step
        nextChapterIndex: {
            type: Number,
            // required: true,
        },
    },
);

module.exports = choiceSchema;