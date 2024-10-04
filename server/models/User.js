const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: function (email) {
          // Regex pattern used to check if email is valid.
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: 'Please enter a valid email',
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (password) {
          // Regex pattern used to check if password is strong enough. Requirements: at least 8 char long, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 digit, at least 1 special char.
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
        },
        message: 'Please enter a valid password',
      },
    },
    createdStories: [{
      type: Schema.Types.ObjectId,
      ref: 'Story',
      default: [],
    }],
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
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

// Hash user password.
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Method to compare and validate password for logging in.
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;