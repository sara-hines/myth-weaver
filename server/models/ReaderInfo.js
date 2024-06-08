const { Schema } = require('mongoose');

const readerInfoSchema = new Schema(
    {
        bookmarkedStories: [{
            type: Schema.Types.ObjectId,
            ref: 'Story',
            default: [],
        }],
        toBeReadStories: [{
            type: Schema.Types.ObjectId, 
            ref: 'Story',
            default: [],
        }],
    },
);

module.exports = readerInfoSchema;