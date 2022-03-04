import { ProxyState } from "../AppState.js";
import { Profile } from "../Models/Profile.js";
import { api } from "./AxiosService.js";





class ProfilesService {
    async getall() {
        const res = await api.get('api/profiles')
        console.log(res.data);
        const profiles = res.data.map(s => new Profile(s))
        ProxyState.profiles = profiles
        console.log(ProxyState.profiles);

    }

    async setActiveProfile(id) {
        let realProfile = ProxyState.profiles.find(p => p.id == id)
        ProxyState.activeProfile = realProfile
        console.log(ProxyState.activeProfile);
    }


}








export const profilesService = new ProfilesService()