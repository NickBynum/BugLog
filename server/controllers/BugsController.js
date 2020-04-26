import express from 'express';
import BaseController from '../utils/BaseController';
import auth0provider from '@bcwdev/auth0provider';
import { bugService } from '../services/BugsService';
import { noteService } from '../services/NotesService'

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get('/:id', this.getBugById)
      .get('', this.getAllBugs)
      .post('', this.createBug)
      .put('/:id', this.editBugById)
      .delete('/:id', this.deleteBugById)
      .get('/:id/notes', this.getNotesByBugId)
  }
  async getBugById(req, res, next) {
    try {
      let data = await bugService.getBugById(req.userInfo.email)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async getAllBugs(req, res, next) {
    try {
      let data = await bugService.getAllBugs()
      return res.send(data)
    } catch (error) { next(error) }
  }
  async createBug(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = bugService.createBug(req.body)
    } catch (error) { next(error) }
  }
  async editBugById(req, res, next) {
    try {
      let data = await bugService.editBugById(req.params.id, req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async deleteBugById(req, res, next) {
    try {
      let data = await bugService.deleteBugById(req.params.id)
      return res.send("Deleted Successfully")
    } catch (error) { next(error) }
  }
  async getNotesByBugId(req, res, next) {
    try {
      let data = await noteService.getNoteByBugId(req.params.id)
      return res.send(data)
    } catch (error) { next(error) }

  }
}