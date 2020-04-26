import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class BugService {
  async getAllBugs() {
    return await dbContext.Bugs.find().populate("creator", "name picture")
  }
  async getBugById(id) {
    let data = await dbContext.Bugs.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Oops this bug doesn't exists!")
    }
    return data
  }
  async createBug(rawData) {
    let data = await dbContext.Bugs.create(rawData)
    return data;
  }
  async editBugById(id, update) {
    let data = await dbContext.Bugs.findByIdAndUpdate({_id: id}, update, {new: true})
    if (!data) {
      throw new BadRequest("This bug doesn't seem to exist!");
    }
    return data;
  }
  async deleteBugById(id) {
    let data = await dbContext.Bugs.findByIdAndDelete({_id: id});
    if (!data) {
      throw new BadRequest("You cannot delete something that doesn't exist!")
    }
  }
}

export const bugService = new BugService()