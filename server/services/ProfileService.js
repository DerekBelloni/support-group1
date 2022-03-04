import { dbContext } from '../db/DbContext.js'

// IMPORTANT profiles should not be updated or modified in any way here. Use the AccountService

class ProfileService {
  /**
   * Returns a user profile from its id
   * @param {string} id
  */
  async getProfileById(id) {
    const profile = await dbContext.Account.findById(id)
    return profile
  }

  async getAllProfiles(query = {}) {
    const allProfiles = await dbContext.Account.find(query)
    const cleaned = allProfiles.map(p => {
      return {
        name: p.name,
        picture: p.picture
      }
    })
    return allProfiles
  }

  /**
    * Returns a list user profiles from a query search of name likeness
    * limits to first 20 without offset
    * @param {string} name
   */
  async findProfiles(name = '', offset = 0) {
    const filter = new RegExp(name, 'ig')
    return await dbContext.Account
      .aggregate([{
        $match: { name: filter }
      }])
      .collation({ locale: 'en_US', strength: 1 })
      .skip(Number(offset))
      .limit(20)
      .exec()
  }


  // async createProfile(body) {
  //   const profile = await dbContext.Account.create(body)
  //   return profile
  // }

  // async updateProfile(update) {
  //   const original = await dbContext.Account.findById(update)
  //   original.name = update.name ? update.name : original.name
  //   original.picture = update.picture ? update.picture : original.picture
  //   original.description = update.description ? update.description : original.description
  //   await original.save()

  // }


  // async deleteProfile(id) {
  //   const removeProfile = await dbContext.Account.findByIdAndDelete(id)
  //   return removeProfile
}


export const profileService = new ProfileService()
