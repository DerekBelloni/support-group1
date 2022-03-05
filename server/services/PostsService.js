import { dbContext } from "../db/DbContext";
import { Forbidden } from "../utils/Errors";

class PostsServivce {



  async getAllPosts(query = {}) {
    const allPosts = await dbContext.Posts.find(query).populate('account', 'name description image')
    return allPosts
  }

  async getPostById(id) {
    const posts = await dbContext.Posts.findById(id)
    await posts.populate('account', 'name image description')
    return posts
  }

  async createPost(body) {
    const newPost = await dbContext.Posts.create(body)
    await newPost.populate('account', 'name image description')
    return newPost
  }

  async editPost(update) {
    const original = await dbContext.Posts.findById(update.id)
    if (original.profileId.toString() !== update.profileId) {
      throw new Forbidden('this is not your post')
    }
    original.description = update.description ? update.description : original.description
    await original.save()
    return original
  }

  async removePost(body) {
    const remove = await dbContext.Posts.findById(body.id)
    if (remove.profileId.toString() !== body.profileId) {
      throw new Forbidden('not your post to delete')
    }
    const removePost = await dbContext.Posts.findByIdAndDelete(remove)
    return `deleted ${removePost}`
  }


}

export const postsService = new PostsServivce()