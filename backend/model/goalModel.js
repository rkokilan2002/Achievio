import 'mongoose';
import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add Text value'],


    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model('Goal',goalSchema);