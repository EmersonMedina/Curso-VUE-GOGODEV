import type INote from "~/interfaces/INote"

export default class NotesService {
    private baseUrl = 'http://localhost:3000/api/notes'

    public async getNotes(): Promise<INote[]> {

        try {
            const uri = this.baseUrl

            const rawResponse = await fetch(uri)
            const response = await rawResponse.json()
            return response
        } catch (error) {
            console.log("Error getting notes")
            return []
        }
       
    }
}