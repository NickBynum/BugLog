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
  }
  async createNote(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await noteService.createNote(req.body)
      return res.send(data)
    }
    catch (error) { next(error) }
  }
  
}