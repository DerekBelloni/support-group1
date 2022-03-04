import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .get('', this.getUserAccount)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createProfile)
      .delete('', this.deleteProfile)
      .put('', this.updateProfile)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async createProfile(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const profile = await accountService.createProfile(req.body)
      return res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  async updateProfile(req, res, next) {
    try {


      req.body.id = req.userInfo.id

      const updatedProfile = await accountService.updateProfile(req.body)
      return res.send(updatedProfile)
    } catch (error) {
      next(error)
    }
  }

  async deleteProfile(req, res, next) {
    try {
      req.body.id = req.userInfo.id
      const deletedProfile = await accountService.deleteAccount(req.body)
      return res.send(deletedProfile)
    } catch (error) {
      next(error)
    }
  }
}
