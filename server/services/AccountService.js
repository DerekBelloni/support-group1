import { dbContext } from '../db/DbContext'
import { Forbidden } from "../utils/Errors"

// Private Methods

/**
 * Creates account if one does not exist
 * @param {any} account
 * @param {any} user
 */
async function createAccountIfNeeded(account, user) {
  if (!account) {
    user._id = user.id
    account = await dbContext.Account.create({
      ...user,
      subs: [user.sub]
    })
  }
  return account
}

/**
 * Adds sub to account if not already on account
 * @param {any} account
 * @param {any} user
 */
async function mergeSubsIfNeeded(account, user) {
  if (!account.subs.includes(user.sub)) {
    // @ts-ignore
    account.subs.push(user.sub)
    await account.save()
  }
}
/**
 * Restricts changes to the body of the account object
 * @param {any} body
 */
function sanitizeBody(body) {
  const writable = {
    name: body.name,
    picture: body.picture
  }
  return writable
}

class AccountService {
  async deleteAccount(body) {

    const removeProfile = await dbContext.Account.findById(body.id)
    if (removeProfile.id !== body.id) {
      throw new Forbidden("this isn't your account")
    }
    await dbContext.Account.findByIdAndDelete(removeProfile)

    return `Deleted account, ${removeProfile}`
  }
  async updateProfile(update) {
    const original = await dbContext.Account.findById(update.id)
    if (original.id !== update.id) {
      throw new Forbidden('this is not your Account')
    }
    original.name = update.name ? update.name : original.name
    original.picture = update.picture ? update.picture : original.picture
    original.description = update.description ? update.description : original.description
    await original.save()
    return original
  }
  async createProfile(body) {
    const profile = await dbContext.Account.create(body)
    return profile
  }
  /**
   * Returns a user account from the Auth0 user object
   *
   * Creates user if none exists
   *
   * Adds sub of Auth0 account to account if not currently on account
   * @param {any} user
   */
  async getAccount(user) {
    let account = await dbContext.Account.findOne({
      _id: user.id
    })
    account = await createAccountIfNeeded(account, user)
    await mergeSubsIfNeeded(account, user)
    return account
  }

  /**
   * Updates account with the request body, will only allow changes to editable fields
   *  @param {any} user Auth0 user object
   *  @param {any} body Updates to apply to user object
   */
  async updateAccount(user, body) {
    const update = sanitizeBody(body)
    const account = await dbContext.Account.findOneAndUpdate(
      { _id: user.id },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    )
    return account
  }
}
export const accountService = new AccountService()
