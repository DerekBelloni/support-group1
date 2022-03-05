import { Auth0Provider } from "@bcwdev/auth0provider";
import { query } from "express";
import { commentsServices } from "../services/CommentsService";
import BaseController from "../utils/BaseController";

export class CommentsController extends BaseController {
  constructor() {
    super("api/comments")
    this.router
      .get('', this.getComments)
      .get('/:id', this.getCommentById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
      .put('/:id', this.editComments)
      .delete('/:id', this.deleteComments)
  }


  async getComments(req, res, next) {
    try {
      const comments = await commentsServices.getComments(res.query)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getCommentById(req, res, next) {
    try {
      req.body.id = req.params.id
      const comments = await commentsServices.getCommentById(req.params.id)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next) {
    try {
      const comment = await commentsServices.createComment(req.body)
    } catch (error) {
      next(error)
    }
  }

  async editComments(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }

  async deleteComments(req, res, next) {
    throw new Error("Method not implemented.");
  }

}