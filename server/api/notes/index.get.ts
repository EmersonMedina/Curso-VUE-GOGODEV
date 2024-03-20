import { Note } from "~/server/models/NoteModel"

export default defineEventHandler(async (event) => {
    try {
        const notes = await Note.find()
        console.log(notes)
        return notes    
    } catch (error) {
        console.log(error)
    }
})