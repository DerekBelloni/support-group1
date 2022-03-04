import { Auth0Provider } from "@bcwdev/auth0provider"
import { profileService } from '../services/ProfileService.js'
import BaseController from '../utils/BaseController'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:id', this.getProfileById)
    // .use(Auth0Provider.getAuthorizedUserInfo)
    // .post('', this.createProfile)
    // .delete('/:id', this.deleteProfile)
    // .put('/:id', this.updateProfile)
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getProfileById(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  async getAllProfiles(req, res, next) {
    try {
      const allProfiles = await profileService.getAllProfiles(req.query)
      return res.send(allProfiles)
    } catch (error) {
      next(error)
    }
  }



}

