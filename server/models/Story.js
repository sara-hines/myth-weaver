const { Schema, model } = require('mongoose');

const storySchema = new Schema(
    {
        title: {
            type: String,
            // required: true,
        },
        // author: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User',
        // },
        author: {
            type: String, 
            // required: true,
        },
        description: {
            type: String,
            // required: true,
        },
        imageUrl: {
            type: String,
        },
        genre: {
            type: String,
        }, 
        tags: [String],
        publishedDate: {
            type: Date,
            default: Date.now,
        },
        chapters: [{
            type: Schema.Types.ObjectId,
            ref: 'Chapter',
            default: [],
        }],
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'Review',
            default: [],
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

// Average rating calculated from all the 1-5 ratings users have given this story.
storySchema.virtual('averageRating').get(function () {
    if (this.reviews.length === 0) {
        return 0;
    }

    // Calculate the total of all ratings users have given this story. The acc is initialized at 0.
    const ratingsTotal = this.reviews.reduce((acc, review) => {
        return acc + (review.rating > 0 ? review.rating : 0);
    }, 0);

    const average = ratingsTotal / this.reviews.length;

    // Return the average rating, ensuring it's never NaN
    return isNaN(average) ? 0 : Math.round(average);
});

// The number of users who have left a rating for this story
storySchema.virtual('ratingsCount').get(function () {
    // This works since rating is a required field on the review model
    return this.reviews.length;
});

const Story = model('Story', storySchema);

module.exports = Story;
