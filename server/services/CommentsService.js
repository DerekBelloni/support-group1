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
    const original = await dbContext.Comments.findById(update.id)
    if (original.profileId.toString() !== update.profileId) {
      throw new Forbidden('this is not your comment')
    }
    original.description = update.description ? update.description : original.description
    await original.save()
    return original
  }

  async deleteComments(body) {
    const remove = await dbContext.Comments.findById(body.id)
    if (remove.profileId.toString() !== body.profileId) {
      throw new Forbidden('delete not authorized from this account')
    }
    const removeComment = await dbContext.Comments.findByIdAndDelete(remove)
    return `deleted ${removeComment}`
  }
}

export const commentsServices = new CommentsServices()