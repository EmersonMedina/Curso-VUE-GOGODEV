import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
    title: String, 
    content : String
})

export const Note = model("Note", NoteSchema);