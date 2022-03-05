import { ProxyState } from "../AppState.js";
import { profilesService } from "../Services/ProfilesService.js";



async function _drawProfiles() {
    let template = ''
    ProxyState.profiles.forEach(p => template += p.ProfileTemplate)
    document.getElementById('display-profiles').innerHTML = template
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
        console.error(error)
    }
}

export class ProfilesController {
    constructor() {
        console.log('Profiles controller loaded');
        ProxyState.on("user", _drawUserProfile)
        ProxyState.on("profiles", _drawProfiles)
        _drawProfiles()
        _getAll()
    }


}