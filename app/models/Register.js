import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true, // Ensures email is unique
      match: [/.+\@.+\..+/, 'Please enter a valid email address'], // Basic email validation
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create a model for the user
const Register = mongoose.models.Register || mongoose.model('Register', userSchema);

export default Register;
