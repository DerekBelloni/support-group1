import { dbContext } from "../db/DbContext"

export class CommentsServices {

  async getCommentById(id) {
    const comment = await dbContext.Comments.findById(id)
    return comment
  }

  async getComments(query = {}) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }

  async createComment(body) {
    const newComment = await dbContext.Comments.create(body)
    return newComment
  }

}

export const commentsServices = new CommentsServices()