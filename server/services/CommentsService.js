import { dbContext } from "../db/DbContext"

export class CommentsServices {
  createComment() {
    throw new Error("Method not implemented.")
  }
  async getCommentById(id) {
    const comment = await dbContext.Comments.findById(id)
    return comment
  }

  async getComments(query = {}) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }

}

export const commentsServices = new CommentsServices()