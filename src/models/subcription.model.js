import mongoose from "mongoose";
const subsciptionSchema=new Schema({
    Subscriber:{
        type:Schema.Types.ObjectId,
        
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjejtId,
        ref:"User"
    }

},
{
    timestamps:true
})





export const Subsciption=mongoose.model("Subsciption,subsciptionSchema")