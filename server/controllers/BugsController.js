import express from 'express';
import BaseController from '../utils/BaseController';
import auth0provider from '@bcwdev/auth0provider';
import { bugService } from '../services/BugsService';
import { notesService } from '../services/NotesService';

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs")
    this.router
    .use(auth0provider.getAuthorizedUserInfo)
    .get('', this.getAllBugs)
    .post('', this.createBug)
    .get('/:id/notes', this.getNotesByBugId)
    .get('/:id', this.getById)
    .put('/:id', this.editBugById)
    .delete('/:id', this.deleteBugById)
  }
  async getById(req, res, next) {
    try {
      let data = await bugService.getById(req.params.id)
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
      let data = await bugService.createBug(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }
  async editBugById(req, res, next) {
    try {
      let data = await bugService.editBugById(req.params.id, req.userInfo.email, req.body)
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
      let data = await notesService.getNoteByBugId(req.params.id)
      return res.send(data)
    } catch (error) { next(error) }

  }
}