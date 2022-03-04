import { profilesService } from "../Services/ProfilesService.js";



async function __drawProfiles() {
    try {
        await profilesService.drawProfiles()
    } catch (error) {
        next(error)
    }
}

async function _getall() {
    try {
        await profilesService.getall()
    } catch (error) {
        next(error)
    }
}

export class ProfilesController {
    constructor() {
        console.log('Profiles controller loaded');
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