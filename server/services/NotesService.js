import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NoteService {
async getNoteByBugId(id) {
  let data = await dbContext.Notes.find({bugId: id })
  if(!data) {
    throw new BadRequest("This Bug doesn't seem to exist!")
  }
  return data
}


}
export const noteService = new NoteService()