import { ProxyState } from "../AppState.js";
import { Profile } from "../Models/Profile.js";
import { api } from "./AxiosService.js";





class ProfilesService {
    async getAll() {
        const res = await api.get('api/profiles')
        const profiles = res.data.map(s => new Profile(s))
        ProxyState.profiles = profiles

    }

    async drawProfiles() {
        let template = ''
        ProxyState.profiles.forEach(p => template += p.ProfileTemplate)
        document.getElementById('display-profiles').innerHTML = template
    }

    async drawUserProfile() {
        let id = ProxyState.user.id
        let realUser = ProxyState.profiles.find(p => p._id == id)
        console.log("User is...", ProxyState.user);
        document.getElementById('display-user').innerHTML = `<h2 class="p-2" onclick="app.profilesController.setActiveProfile('${ProxyState.user.id}}')">Hello, ${ProxyState.user.nickname}</h2>
        <div><img style="width: 200px; height: 200px;" class="rounded" src="${realUser.image}" alt="Profile_Image"></div>`
    }



}








export const profilesService = new ProfilesService()