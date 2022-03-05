import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

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

  async editComments(update) {
    const original = await dbContext.Posts.findById(update.id)
    if (original.profileId.toString() !== update.profileId) {
      throw new Forbidden('this is not your comment')
    }
    original.description = update.description ? update.description : original.description
    await original.save()
    return original
  }
}

export const commentsServices = new CommentsServices()