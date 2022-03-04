import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService";
import BaseController from "../utils/BaseController";

export class PostsController extends BaseController {

  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAllPosts)
      // .get('/:id', this.getPostById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPost)
      .put('/:id', this.editPost)
      .delete('/:id', this.removePost)
  }


  async getAllPosts(req, res, next) {
    try {
      const posts = await postsService.getAllPosts(req.query)
      return res.send(posts)
    } catch (error) {
      next(error)
    }
  }



  async createPost(req, res, next) {
    try {
      req.body.profileId = req.userInfo.id
      const newPosts = await postsService.createPost(req.body)
      return res.send(newPosts)
    } catch (error) {
      next(error)
    }
  }


  async editPost(req, res, next) {
    try {
      // notes set request to id to params id 
      // then set the profile or who ever created it to the user id

      req.body.id = req.params.id
      req.body.profileId = req.userInfo.id
      const editedPost = await postsService.editPost(req.body)
      return res.send(editedPost)
    } catch (error) {
      next(error)
    }
  }


  async removePost(req, res, next) {
    try {
      req.body.id = req.params.id
      req.body.profileId = req.userInfo.id
      const remove = await postsService.removePost(req.body)
      return res.send(remove)
    } catch (error) {
      next(error)
    }
  }

}