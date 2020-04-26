import express from 'express';
import BaseController from '../utils/BaseController';
import auth0provider from '@bcwdev/auth0provider';
import { noteService } from '../services/NotesService';

export class NoteController extends BaseController {
  constructor() {
    super("api/notes")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .post('', this.createNote)
      .put('/:id', this.editNote)
      .delete('/:id', this.deleteNote)
  }
  async createNote(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await noteService.createNote(req.body)
      return res.send(data)
    }
    catch (error) { next(error) }
  }
  async editNote(req, res, next) {
    try {
      let data = await noteService.editNote(req.params.id, req.userInfo.email, req.body)
      return res.send(data)
    }
    catch (error) { next(error) }
  }
  async deleteNote(req, res, next) {
    try {
      await noteService.deleteNote(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted!")
    } catch (error) {
      next(error)
    }
  }
}