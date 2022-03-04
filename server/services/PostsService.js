import { dbContext } from "../db/DbContext";
import { Forbidden } from "../utils/Errors";

class PostsServivce {

  async createPost(body) {
    const newPost = await dbContext.Posts.create(body)
    await newPost.populate('account', 'name picture description')
    return newPost
  }
  async getAllPosts(query = {}) {
    const allPosts = await dbContext.Posts.find(query)
    return allPosts
  }

  async editPost(update) {
    const original = await dbContext.Posts.findById(update.id)
    if (original.id !== update.id) {
      throw new Forbidden('this is not your post')
    }
    original.description = update.description ? update.description : original.description
    await original.save()
    return original
  }
}

export const postsService = new PostsServivce()