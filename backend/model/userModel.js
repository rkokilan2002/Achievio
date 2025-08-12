import 'mongoose';
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a Name'],

    },
    email:{
        type:String,
        required:[true,'Please add a Email'],
        unique:true

    },
    password:{
        type:String,
        required:[true,'Please add a Password'],

    },
    

},
{
    timestamps:true
})

export default mongoose.model('User',userSchema);