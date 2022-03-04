import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";





class ProfilesService {
    async getall() {
        const res = await api.get('api/profiles')
        console.log(res.data);

    }

    async setActiveProfile(id) {
        ProxyState.activeProfile
    }


}








export const profilesService = new ProfilesService()