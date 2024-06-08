const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
    {
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User',
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
);

const Review = model('Review', reviewSchema);

module.exports = Review;