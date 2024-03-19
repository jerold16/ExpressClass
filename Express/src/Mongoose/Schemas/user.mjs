// Import Mongoose (ESM)
import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    age: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    createdAt:{
        type: mongoose.Schema.Types.Date,
        default:Date.now(),
        
    }
});

userSchema.statics.findByName=function(name){
    return this.where({username:name});
}
userSchema.pre('save',function(){
    return this.createdAt=Date.now();
})

// Create and export the model (with adjustments)
export const UserModel = mongoose.model("User", userSchema);
