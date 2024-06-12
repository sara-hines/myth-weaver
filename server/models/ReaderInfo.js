const { Schema } = require('mongoose');

// Stores the User's bookmarkedStories and toBeReadStories.
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