const { Schema, model } = require('mongoose');
const choiceSchema = require('./Choice');

const chapterSchema = new Schema(
    {
        chapterIndex: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        isEnd: {
            type: Boolean, 
            required: true,
        },
        choices: {
            type: [choiceSchema],
            validate: {
                // 'continuing' steps must have 3 choices, and 'ending' steps must not have choices
                validator: function (choicesArray) {
                    if (this.type === 'continuing') {
                        return Array.isArray(choicesArray) && choicesArray.length === 3;
                    } else if (this.type === 'ending') {
                        return choicesArray === undefined || choicesArray.length === 0;
                    }
                },
                message: function (props) {
                    if (this.type === 'continuing') {
                        return `The number of choices (${props.value ? props.value.length : 0}) is not 3.`;
                    } else if (this.type === 'ending') {
                        return `Choices should not be provided for 'ending' steps.`;
                    }
                },
            },
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

const Chapter = model('Chapter', chapterSchema);

module.exports = Chapter;