import { ProxyState } from "../AppState.js";
import { profilesService } from "../Services/ProfilesService.js";



async function _drawProfiles() {
    try {
        await profilesService.drawProfiles()
    } catch (error) {
        next(error)
    }
}

async function _drawUserProfile() {
    try {
        await profilesService.drawUserProfile()
    } catch (error) {
        console.log(error);
    }
}

async function _getAll() {
    try {
        await profilesService.getAll()
    } catch (error) {
        next(error)
    }
}

export class ProfilesController {
    constructor() {
        console.log('Profiles controller loaded');
        ProxyState.on("user", _drawUserProfile)
        ProxyState.on("profiles", _drawProfiles)
        _getAll()
    }

    async setActiveProfile(id) {
        try {
            await profilesService.setActiveProfile(id)
        } catch (error) {
            console.log(error);
        }
    }


}