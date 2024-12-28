// models/User.js
import mongoose from 'mongoose';


const ProfileSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);

export default Profile;

