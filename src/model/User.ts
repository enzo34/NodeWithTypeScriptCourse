import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    created_at: Date,
    updated_at: Date,
    token: String,
});

export default mongoose.model('User', UserSchema);