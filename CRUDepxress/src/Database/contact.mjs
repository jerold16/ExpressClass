import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is missing']
    },
    phone:{
        type:Number,
        required:[true,'phone is missing']
    },
    resume:{
        type:String
    }
})

export const contactmodel=mongoose.model('contactDetails', contactSchema)