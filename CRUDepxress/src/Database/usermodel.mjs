import mongoose from "mongoose";
const addressachema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', //name we give to our table in the createModel method
        required:true
    },
    line1:{
        type:String,
        required:true,
    },
    line2:{
        type:String,
    },
    district:{
        type:String,
        required:true,
    },
    state:{
        type:mongoose.Schema.Types.String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    },
})

const userschema=new mongoose.Schema({
    user:{
        type:String,
        required:true, 
        unique:true      
    },
    imageurl:String,
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    address:[addressachema],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    lastupdate:{
        type:Date,
        default:Date.now()
    }
})
userschema.pre('save',function(next){
    this.lastupdate=Date.now();
    next()
})
export const usermodel =mongoose.model('Userdata',userschema)
export const addressmodel= mongoose.model('Useraddress',addressachema)