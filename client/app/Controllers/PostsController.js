import { ProxyState } from "../AppState";
import { postsService } from "../Services/PostsService.js";



async function _getAllPosts() {
    await postsService._getAllPosts()
}


export class PostsController {
    constructor() {
        ProxyState.on("posts", _getAllPosts)
        console.log("Post Controller Loaded...");
    }
    async makePost(id) {
        try {
            await postsService.makePost(id)
        } catch (error) {
            console.log(error);
        }

    }
}