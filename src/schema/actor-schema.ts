import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({ 
    name: { type: String, required: true}
})

export const Actor = mongoose.model("Actors", actorSchema)