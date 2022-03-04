import { ProfilesController } from "../Controllers/ProfilesController.js";
import { api } from "./AxiosService.js";





class ProfilesService {
    async getall() {
        const res = await api.get('api/profiles')
        console.log(res.data);

    }




}








export const profilesService = new ProfilesService()