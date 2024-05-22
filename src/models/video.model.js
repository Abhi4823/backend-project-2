import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
   const videoSchema= new Schema(
    {
        videoFile: {
            type: String,
            required: true
        },
        thumbnail:{
              type: String,
              required: true 
        },
       title: {
            type: String,
            required:true
        },
        descrition:{
            typr: String,
            required: true
        },
        duration: {
            type:Number,//couldinary url
            required:true,

        },
        views:
        {
            type:Number,
            default:0
        },

        isPublished:{
        type:Boolean,
        default: true
         },

          owner: {
            type: Schema.Type.ObjecId,
            ref:"User"
         }
 
    },
    {
        timestamps:true
    }
   )

   export const video= mongoose.model("Video",videoSchema)
