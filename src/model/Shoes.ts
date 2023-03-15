import mongoose, { Schema } from 'mongoose';

const ShoesSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    size: Number,
    color: String,
});

export default mongoose.model('Shoes', ShoesSchema);
