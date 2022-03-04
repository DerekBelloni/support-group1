import { ProxyState } from "../AppState.js";
import { Profile } from "../Models/Profile.js";
import { api } from "./AxiosService.js";





class ProfilesService {
    async getall() {
        const res = await api.get('api/profiles')
        console.log(res.data);
        const profiles = res.data.map(s => new Profile(s))
        ProxyState.profiles = profiles
        console.log("Profiles Grabbed are...", ProxyState.profiles);
    }

    async drawProfiles() {
        let template = ''
        ProxyState.profiles.forEach(p => template += p.ProfileTemplate)
        document.getElementById('display-profiles').innerHTML = template
    }

    async drawUserProfile() {
        console.log("User is...", ProxyState.user);
        document.getElementById('display-user').innerHTML = `<h2 class="p-2" onclick="app.profilesController.setActiveProfile('${ProxyState.user.id}}')">${ProxyState.user.name}</h2>`
    }

    async setActiveProfile(id) {
        let realProfile = ProxyState.profiles.find(p => p.id == id)
        ProxyState.activeProfile = realProfile
        console.log("Active Profile is...", ProxyState.activeProfile);
    }


}








export const profilesService = new ProfilesService()