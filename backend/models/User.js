// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }, // store hashed password
  profilePicture: { type: String, default: '' },
  createdAt:{ type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);