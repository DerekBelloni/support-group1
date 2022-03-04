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
        let id = ProxyState.user.id
        let realUser = ProxyState.profiles.find(p => p._id == id)
        console.log("User is...", ProxyState.user);
        document.getElementById('display-user').innerHTML = `<h2 class="p-2" onclick="app.profilesController.setActiveProfile('${ProxyState.user.id}}')">Hello, ${ProxyState.user.nickname}</h2>
        <div><img style="width: 200px; height: 200px;" class="rounded" src="${realUser.imgUrl}" alt="Profile_Image"></div>`
    }

    async setActiveProfile(id) {
        let realProfile = ProxyState.profiles.find(p => p.id == id)
        ProxyState.activeProfile = realProfile
    }


}








export const profilesService = new ProfilesService()