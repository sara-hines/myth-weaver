const { Schema } = require('mongoose');

// Stores the User's createdStories.
const authorInfoSchema = new Schema(
  {
    createdStories: [{
      type: Schema.Types.ObjectId,
      ref: 'Story',
      default: [],
    }],
  },
);

module.exports = authorInfoSchema;