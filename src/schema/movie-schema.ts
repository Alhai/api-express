import { Schema } from "mongoose";
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title:{ type : String, required : true},
    description: { type : String, required : true},
    releaseDate: { type: Date, default: Date.now },
    director: { type : String, required : true},
    actors: [{
        type : Schema.Types.ObjectId,
        ref :'actor'
    }]
  });

export const Movie = mongoose.model("Movies", movieSchema);