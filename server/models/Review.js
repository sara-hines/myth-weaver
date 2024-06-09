const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
    {
        username: {
            type: String,
        },
        fullName: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        reviewText: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

reviewSchema.virtual('createdAtFormattedDate').get(function () {
    return `${this.createdAt.toLocaleDateString()} at ${this.createdAt.toLocaleTimeString()}`;
});

const Review = model('Review', reviewSchema);

module.exports = Review;