import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NoteService {
  async getNoteByBugId(id) {
    let data = await dbContext.Notes.find({ bugId: id })
    if (!data) {
      throw new BadRequest("This Bug doesn't seem to exist!")
    }
    return data
  }
  async createNote(rawData) {
    let data = await dbContext.Notes.create(rawData)
    return data
  }
  async editNote(bugId, userEmail, update) {
    let data = await dbContext.Notes.findOneAndUpdate({ _id: bugId, creatorEmail: userEmail },
      update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you don't have permissions")
    }
    return data;
  }

}
export const noteService = new NoteService()