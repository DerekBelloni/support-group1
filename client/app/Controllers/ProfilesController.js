import { ProxyState } from "../AppState.js";
import { profilesService } from "../Services/ProfilesService.js";



async function _drawProfiles() {
    try {
        await profilesService.drawProfiles()
    } catch (error) {
        next(error)
    }
    console.log("Drew Profiles");
}

async function _drawUserProfile() {
    try {
        await profilesService.drawUserProfile()
    } catch (error) {
        console.log(error);
    }
}

async function _getall() {
    try {
        await profilesService.getall()
    } catch (error) {
        next(error)
    }
    console.log("On load user is...", ProxyState.user);
    console.log("Account is...", ProxyState.account);
}

export class ProfilesController {
    constructor() {
        console.log('Profiles controller loaded');
        ProxyState.on("user", _drawUserProfile)
        ProxyState.on("profiles", _drawProfiles)
        _getall()
    }

    async setActiveProfile(id) {
        try {
            await profilesService.setActiveProfile(id)
        } catch (error) {
            console.log(error);
        }
    }


}